from flask import request, make_response, session, jsonify, flash
from flask_restful import Resource, Api
from sqlalchemy.exc import IntegrityError
#where should i import api from? I just removed it from config
from config import app, db, bcrypt
from models import User

api = Api(app)



#taking this from the lesson Authenticating Users
class HomePage(Resource):
    def get(self):
        return {'message': 'Welcome to my Home Page'}, 200
    
api.add_resource(HomePage, '/')


class Users(Resource):
    def post(self):
        form_json = request.get_json()
        new_user = User(
            username=form_json['username'],
            email=form_json['email']
        )
        # import ipdb; ipdb.set_trace()
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id
        response = make_response(
            new_user.to_dict(),
            201
        )
        return response
api.add_resource(Users, '/users')


class SignUp(Resource):
    
    def post(self):
        form_json = request.get_json()
        new_user = User(username=form_json['username'], email=form_json['email'])
        new_user.password_hash = form_json['password']

        db.session.add(new_user)
        db.session.commit()

        response = make_response(
            new_user.to_dict(),
            201
        )
        return response

        # username = request.json['username']
        # email = request.json['email']
        # password = request.json['password']

        # password_confirmation = request.json['password_confirmation']
        
        # user_exists = User.query.filter(User.email == email).first() is not None

        # if user_exists:
        #     return jsonify({"error": "User already exists"}), 422

        # hashed_password = bcrypt.generate_password_hash(password)

        # hashed_password_confirmation = bcrypt.generate_password_hash(password_confirmation)

        # new_user = User(
        #     email=email,
        #     _password_hash=hashed_password,

            # password_confirmation = hashed_password_confirmation,
        #     username=username
        # )
        #added username: new_user.username
        # db.session.add(new_user)
        # db.session.commit()
        # return jsonify({
        #     "id": new_user.id,
        #     "email": new_user.email,
        #     "username": new_user.username
        # })
    
api.add_resource(SignUp, '/signup')


class Login(Resource):

    def post(self):
        
        user = User.query.filter(
            User.username == request.get_json()['username']
        ).first()

        session['user_id'] = user.id
        return user.to_dict()

        # username = request.get_json().get('username')
        # password = request.get_json().get('password')
        # user = User.query.filter(User.username == username).first()

        # password = request.get_json()['password']

        # if user.authenticate(password):
        # if user is None:
        #     return {'error': 'Invalid username or password'}, 401
        # if not bcrypt.check_password_hash(user._password_hash, password):
        #     return {'error': 'Invalid username or password'}, 401

        # flash("Login Successful!")
        # session.permanent = True
        # session['user_id'] = user.id
        # return jsonify({
        #     "id": user.id,
            # "email": user.email,
            # "username": user.username
        # })
api.add_resource(Login, '/login', endpoint='login')


class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        response = make_response('', 204)
        return response
api.add_resource(Logout, '/logout', endpoint='logout')


class CheckSession(Resource):

    def get(self):      
        # user = User.query.filter(User.id == session.get('user_id')).first()
        # if user:
        #     return user.to_dict()
        # else:
        #     return {'message': '401: Not Authorized'}, 401

        user_id = session['user_id']
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return user.to_dict(), 200

        return {}, 401
    
api.add_resource(CheckSession, '/check_session', endpoint='check_session')


class ClearSession(Resource):

    def delete(self):

        session['page_views'] = None
        session['user_id'] = None

        return {}, 204
api.add_resource(ClearSession, '/clear', endpoint='clear')









if __name__ == '__main__':
    app.run( port = 5555, debug = True )