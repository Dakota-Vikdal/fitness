from flask import request, make_response, session, jsonify, flash
from flask_restful import Resource, Api
from sqlalchemy.exc import IntegrityError
#where should i import api from? I just removed it from config
from config import app, db, bcrypt
from models import User

api = Api(app)

app.secret_key = b'\xa8\x96G\xf2\xfbM{\x8e\xfdt\x92I\xef\xf3\xd7\x98'

#taking this from the lesson Authenticating Users
class HomePage(Resource):
    def get(self):
        return {'message': 'Welcome to my Home Page'}, 200
    
api.add_resource(HomePage, '/')

class SignUp(Resource):
    
    def post(self):

        username = request.json['username']
        email = request.json['email']
        password = request.json['password']
        # password_confirmation = request.json['password_confirmation']
        
        user_exists = User.query.filter(User.email == email).first() is not None

        if user_exists:
            return jsonify({"error": "User already exists"}), 409

        hashed_password = bcrypt.generate_password_hash(password)
        # hashed_password_confirmation = bcrypt.generate_password_hash(password_confirmation)
        new_user = User(
            email=email,
            _password_hash=hashed_password,
            # password_confirmation = hashed_password_confirmation,
            username=username
        )
        db.session.add(new_user)
        db.session.commit()
        return jsonify({
            "id": new_user.id,
            "email": new_user.email
        })

class Login(Resource):

    def post(self):

        email = request.get_json().get('email')
        password = request.get_json().get('password')
        user = User.query.filter(User.email == email).first()

        # password = request.get_json()['password']

        # if user.authenticate(password):
        if user is None:
            return {'error': 'Invalid email or password'}, 401
        if not bcrypt.check_password_hash(user._password_hash, password):
            return {'error': 'Invalid email or password'}, 401

        flash("Login Successful!")
        session.permanent = True
        session['user_id'] = user.id
        return jsonify({
            "id": user.id,
            "email": user.email,
            "username": user.username
        })


class Logout(Resource):

    def delete(self):
        # username = request.get_json().get('username')
        # user = User.query.filter(User.username == username).first()
        # flash(f"You have been logged out! See you again, {username}")
        session.pop("user_id", None)

        return {}, 204

class CheckSession(Resource):

    def get(self):

        user_id = session['user_id']
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return user.to_dict(), 200

        return {}, 401

class ClearSession(Resource):

    def delete(self):

        session['page_views'] = None
        session['user_id'] = None

        return {}, 204


api.add_resource(ClearSession, '/clear', endpoint='clear')
api.add_resource(SignUp, '/signup')
api.add_resource(Login, '/login', endpoint='login')
api.add_resource(Logout, '/logout', endpoint='logout')
api.add_resource(CheckSession, '/check_session', endpoint='check_session')



if __name__ == '__main__':
    app.run( port = 5555, debug = True )