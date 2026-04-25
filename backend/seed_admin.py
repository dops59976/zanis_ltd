#!/usr/bin/env python3
"""
Seed admin user với password.
Run: python seed_admin.py
"""
import sys
import os

sys.path.insert(0, os.path.dirname(__file__))

from database import SessionLocal, init_db
from models import User
from auth import hash_password

def seed_admin():
    init_db()
    db = SessionLocal()
    
    try:
        # Check if admin exists
        admin = db.query(User).filter(User.email == "admin@zanis.local").first()
        
        if admin:
            print("✅ Admin user already exists")
            print(f"   Email: admin@zanis.local")
            print(f"   ID: {admin.id}")
            return
        
        # Create admin with password
        password_hash = hash_password("admin")
        admin = User(
            email="admin@zanis.local",
            name="Admin User",
            password_hash=password_hash,
            google_id="local-admin"
        )
        
        db.add(admin)
        db.commit()
        db.refresh(admin)
        
        print("✅ Admin user created!")
        print(f"   Email: admin@zanis.local")
        print(f"   Password: admin")
        print(f"   ID: {admin.id}")
        
    except Exception as e:
        print(f"❌ Error: {e}")
        db.rollback()
        sys.exit(1)
    finally:
        db.close()

if __name__ == "__main__":
    seed_admin()
