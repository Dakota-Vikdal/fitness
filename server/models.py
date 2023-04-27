from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property

from config import db, bcrypt


class User( db.Model, SerializerMixin ):
    __tablename__ = 'users'

    serialize_rules=('')

    id = db.Column(db.Integer, primary_key = True)
    email = db.Column(db.String, nullable= False, default='')
    username = db.Column(db.String)
    _password_hash = db.Column(db.String, nullable = False)
    
    
    @hybrid_property
    def password_hash( self ):
        return self._password_hash
    
    @password_hash.setter
    def password_hash( self, password ):
        password_hash = bcrypt.generate_password_hash(
            password.encode( 'utf-8' )
        )
        self._password_hash = password_hash.decode( 'utf-8' )

    def authenticate( self, password ):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode( 'utf-8' )
        )
    
    def __repr__(self):
        return f'USER: ID: {self.id}, Username: {self.username}, Email: {self.email}'
    

class Workout(db.Model, SerializerMixin):
    __tablename__='workouts'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)


class ExerciseList(db.Model, SerializerMixin):
    __tablename__='exerciselists'

    id = db.Column(db.Integer, primary_key=True)
    

    # created_at = db.Column(db.DateTime, server_default = db.func.now())
