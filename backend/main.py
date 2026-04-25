from contextlib import asynccontextmanager
from fastapi import FastAPI, Depends, HTTPException, Security
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel
from sqlalchemy.orm import Session
from sqlalchemy import text
from database import init_db, get_db
from models import User, Session as DBSession
from schemas import UserCreate, User as UserSchema
from auth import verify_password, hash_password
from datetime import datetime, timedelta, timezone
import secrets
import logging

logger = logging.getLogger(__name__)

# ── Lifespan (replaces deprecated on_event) ──────────────────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield

app = FastAPI(lifespan=lifespan)

# ── CORS ─────────────────────────────────────────────────────────────────────
# TODO: thay bằng domain thật của bạn trước khi deploy production
ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://localhost:8080",
    # "https://yourdomain.com",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Auth helper ───────────────────────────────────────────────────────────────
security = HTTPBearer()

def get_current_session(
    credentials: HTTPAuthorizationCredentials = Security(security),
    db: Session = Depends(get_db),
) -> DBSession:
    token = credentials.credentials
    now = datetime.now(timezone.utc)

    session = db.query(DBSession).filter(DBSession.token == token).first()
    if not session:
        raise HTTPException(status_code=401, detail="Invalid token")

    # Normalize expires_at to aware datetime if stored as naive
    expires_at = session.expires_at
    if expires_at.tzinfo is None:
        expires_at = expires_at.replace(tzinfo=timezone.utc)

    if expires_at < now:
        raise HTTPException(status_code=401, detail="Session expired")

    return session


# ── Root / Health ─────────────────────────────────────────────────────────────
@app.get("/")
def read_root():
    return {"message": "Welcome to Zanis LTD"}


@app.get("/health")
def health():
    return {"message": "Welcome to Zanis LTD", "status": "ok"}


# ── Auth / Login ──────────────────────────────────────────────────────────────
class LoginRequest(BaseModel):
    email: str
    password: str


@app.post("/api/auth/login", status_code=201)
def login(request: LoginRequest, db: Session = Depends(get_db)):
    """
    Login with email + password.
    Return session token.
    """
    user = db.query(User).filter(User.email == request.email).first()
    if not user or not user.password_hash:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    if not verify_password(request.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    # Create session
    token = secrets.token_urlsafe(32)
    expires_at = datetime.now(timezone.utc) + timedelta(days=30)
    
    db_session = DBSession(
        user_id=user.id,
        token=token,
        expires_at=expires_at,
    )
    db.add(db_session)
    db.commit()
    db.refresh(db_session)
    
    return {
        "session_id": db_session.id,
        "token": token,
        "expires_at": expires_at.isoformat(),
        "user": {"id": user.id, "email": user.email, "name": user.name}
    }


# ── Users ─────────────────────────────────────────────────────────────────────
@app.post("/api/users", response_model=UserSchema, status_code=201)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    existing = db.query(User).filter(User.email == user.email).first()
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    # NOTE: google_id nên được verify bằng Google ID token ở đây
    # trước khi tin tưởng giá trị từ client.
    db_user = User(
        email=user.email,
        name=user.name,
        google_id=user.google_id,
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


@app.get("/api/users/{user_id}", response_model=UserSchema)
def get_user(
    user_id: int,
    db: Session = Depends(get_db),
    _: DBSession = Depends(get_current_session),   # requires valid token
):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.get("/api/users/email/{email}", response_model=UserSchema)
def get_user_by_email(
    email: str,
    db: Session = Depends(get_db),
    _: DBSession = Depends(get_current_session),
):
    user = db.query(User).filter(User.email == email).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


@app.get("/api/users", response_model=list[UserSchema])
def list_users(
    skip: int = 0,
    limit: int = 10,
    db: Session = Depends(get_db),
    _: DBSession = Depends(get_current_session),   # protected
):
    if limit > 100:
        raise HTTPException(status_code=400, detail="limit cannot exceed 100")
    return db.query(User).offset(skip).limit(limit).all()


# ── Sessions ──────────────────────────────────────────────────────────────────
@app.post("/api/sessions", status_code=201)
def create_session(user_id: int, db: Session = Depends(get_db)):
    """
    Tạo session cho user.
    Trong thực tế endpoint này nên được bảo vệ bằng
    Google OAuth callback chứ không nhận user_id trực tiếp.
    """
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")

    # Token an toàn — 32 bytes = 256 bit entropy
    token = secrets.token_urlsafe(32)
    expires_at = datetime.now(timezone.utc) + timedelta(days=30)

    db_session = DBSession(
        user_id=user_id,
        token=token,
        expires_at=expires_at,
    )
    db.add(db_session)
    db.commit()
    db.refresh(db_session)

    return {
        "session_id": db_session.id,
        "token": token,
        "expires_at": expires_at.isoformat(),
    }


@app.get("/api/sessions/{session_id}")
def get_session(
    session_id: int,
    db: Session = Depends(get_db),
    current_session: DBSession = Depends(get_current_session),
):
    session = db.query(DBSession).filter(DBSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    # Chỉ cho phép xem session của chính mình
    if session.user_id != current_session.user_id:
        raise HTTPException(status_code=403, detail="Forbidden")

    return session


@app.delete("/api/sessions/{session_id}")
def delete_session(
    session_id: int,
    db: Session = Depends(get_db),
    current_session: DBSession = Depends(get_current_session),
):
    session = db.query(DBSession).filter(DBSession.id == session_id).first()
    if not session:
        raise HTTPException(status_code=404, detail="Session not found")

    if session.user_id != current_session.user_id:
        raise HTTPException(status_code=403, detail="Forbidden")

    db.delete(session)
    db.commit()
    return {"message": "Session deleted"}


# ── DB health (internal use only — nên đặt sau auth hoặc chỉ dùng nội bộ) ───
@app.get("/api/db/status")
def db_status(db: Session = Depends(get_db)):
    try:
        db.execute(text("SELECT 1"))
        return {"status": "connected", "message": "Database is connected"}
    except Exception:
        # Không lộ chi tiết lỗi ra ngoài
        logger.exception("Database health check failed")
        raise HTTPException(status_code=500, detail="Database connection error")