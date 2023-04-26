from flask import request, make_response, session
from flask_restful import Resource, Api
from sqlalchemy.exc import IntegrityError
#where should i import api from? I just removed it from config
from config import app, db, bcrypt
from models import User

api = Api(app)

#taking this from the lesson Authenticating Users
class Logins(Resource):

    def post(self):
        user = User.query.filter(
            User.username == request.get_json()['username']
        ).first()

        session['user_id'] = user.id
        return user.to_dict()

api.add_resource(Logins, '/users')


if __name__ == '__main__':
    app.run( port = 5555, debug = True )