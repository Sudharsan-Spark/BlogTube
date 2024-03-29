from flask_sqlalchemy import SQLAlchemy
from uuid import uuid4

db=SQLAlchemy()

def get_uuid():
    return uuid4().hex

class User(db.Model):
    id=db.Column(db.String(32),primary_key=True,unique=True, default=get_uuid)
    email=db.Column(db.String(345), unique=True)
    password=db.Column(db.Text,nullable=False)

class new_blog(db.Model):
    b_id=db.Column(db.String(32),primary_key=True,unique=True, default=get_uuid)
    title=db.Column(db.String(500))
    date=db.Column(db.String(345))
    content=db.Column(db.String(345))