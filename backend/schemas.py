from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    email: EmailStr
    name: str

class UserCreate(UserBase):
    google_id: Optional[str] = None

class UserSignup(UserBase):
    password: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    session_id: int
    token: str
    expires_at: datetime
    user: 'User'

class User(UserBase):
    id: int
    google_id: Optional[str]
    profile_picture: Optional[str]
    is_active: bool
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

LoginResponse.model_rebuild()


class SessionCreate(BaseModel):
    user_id: int
    token: str
    expires_at: datetime

class SessionResponse(BaseModel):
    id: int
    user_id: int
    token: str
    is_active: bool
    created_at: datetime
    expires_at: datetime
    
    class Config:
        from_attributes = True
