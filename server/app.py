from flask import request, make_response, session
from flask_restful import Resource, Api
from sqlalchemy.exc import IntegrityError
#where should i import api from? I just removed it from config
from config import app, db, bcrypt
from models import User

api = Api(app)


class Users( Resource ):
    def get(self):
        return 'hey'

api.add_resource(Users, '/users')


if __name__ == '__main__':
    app.run( port = 5555, debug = True )