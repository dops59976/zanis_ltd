from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional

class UserBase(BaseModel):
    email: EmailStr
    name: str

class UserCreate(UserBase):
    google_id: Optional[str] = None

class User(UserBase):
    id: int
    google_id: Optional[str]
    profile_picture: Optional[str]
    is_active: bool
    created_at: datetime
    updated_at: datetime
    
    class Config:
        from_attributes = True

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
