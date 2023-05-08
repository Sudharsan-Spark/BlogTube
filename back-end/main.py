from flask import Flask, request,jsonify,session
from flask_bcrypt import Bcrypt
from flask_session import Session
from config import ApplicationConfig
from models import db,User,new_blog
from flask_cors import CORS,cross_origin

app=Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt=Bcrypt(app)
CORS(app, origins="http://localhost:3000",supports_credentials=True)
server_session=Session(app)
db.init_app(app)

with app.app_context():
    db.create_all()


@app.route("/@me")
def get_current_user():
    user_id=session.get("user_id")

    if not user_id:
        return jsonify({"error":"Unauthorized"}), 401
    
    user= User.query.filter_by(id=user_id).first()
    return jsonify({
        "id": user.id,
        "email": user.email
    })


@app.route("/register",methods=["POST"])
def register_user():
    email=request.json["email"]
    password= request.json["password"]

    user_exists=User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error":"User already exists"}), 409

    hashed_password=bcrypt.generate_password_hash(password)
    new_user=User(email=email,password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    session["user_id"]=new_user.id
    
    return jsonify({
        "id":new_user.id,
        "email":new_user.email
    })


@app.route("/login",methods=["POST"])
def login_user():
    email=request.json["email"]
    password= request.json["password"]

    user=User.query.filter_by(email=email).first()

    if user is None:
        return jsonify({"error":"Unauthorized"}), 401

    if not bcrypt.check_password_hash(user.password,password):
        return jsonify({"error":"unauthorized"}), 401

    session["user_id"]= user.id

    response = jsonify({
        "id":user.id,
        "email":user.email
    })
    
    response.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response

@app.route("/logout", methods=["POST"])
def logout_user():
    session.pop("user_id")
    return "200"

@app.route("/blog",methods=["POST"])
@cross_origin(origin="http://localhost:3000", supports_credentials=True)
def add_blog():
    title=request.json["title"]
    date= request.json["date"]
    content= request.json["content"]

    blog_exists=new_blog.query.filter_by(title=title).first() is not None

    if blog_exists:
        return jsonify({"error":"Blog already exists"}), 409

    blogNew =new_blog(title=title,date=date,content=content)
    db.session.add(blogNew)
    db.session.commit()
    
    session["blog_id"]=blogNew.b_id
    
    details= jsonify({
        "id":blogNew.b_id,
        "title":blogNew.title
    })
   
    details.headers.add("Access-Control-Allow-Origin", "http://localhost:3000")
    details.headers.add('Access-Control-Allow-Credentials', 'true')
    return details

if __name__ == "__main__":
    app.run(debug=True)