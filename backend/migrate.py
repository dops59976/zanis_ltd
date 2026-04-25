#!/usr/bin/env python3
"""
Migration script to add password_hash column to users table
"""
import sys
import os
sys.path.insert(0, os.path.dirname(__file__))

from sqlalchemy import text
from database import SessionLocal, engine

def migrate():
    db = SessionLocal()
    try:
        # Add password_hash column if it doesn't exist
        db.execute(text("""
            ALTER TABLE users
            ADD COLUMN IF NOT EXISTS password_hash VARCHAR;
        """))
        db.commit()
        print("✅ Migration completed: password_hash column added")
    except Exception as e:
        print(f"❌ Migration error: {e}")
        db.rollback()
        sys.exit(1)
    finally:
        db.close()

if __name__ == "__main__":
    migrate()
