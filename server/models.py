from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.orm import validates

from config import db, bcrypt


class User( db.Model, SerializerMixin ):
    __tablename__ = 'users'

    serialize_rules=('workouts',)

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    email = db.Column(db.String, nullable= False, default='')
    _password_hash = db.Column(db.String, nullable = False)

    workouts = db.relationship('Workout', backref='user')
    
    
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
    

    @validates( 'username' )
    def validate_user(self, key, username):
        if username in [ u.username for u in User.query.all() ]:
            raise ValueError("Sorry, username already taken.")
        return username

    # @validates('_password_hash')
    # def validates_content(self, key, password):
    #     if len(password) <= 6:
    #         raise ValueError("Password must be 6 characters or longer.")
    #     return password







class Workout(db.Model, SerializerMixin):
    __tablename__ = 'workouts'


    # If you remove '-exerciselists.workout' from the serialize_rules workouts will render 
    # inside of exerciselists array
    serialize_rules=('-user_id', '-exerciselists', 'exercises', '-exercises.exerciselists' )

    id = db.Column(db.Integer, primary_key=True)
    workout_name = db.Column(db.String, nullable=False)
    #maybe add workout_length here? Determine a general amount of time one will spend in a workout.

    exerciselists = db.relationship('ExerciseList', backref='workout')
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    exercises = association_proxy('exerciselists', 'exercise')



class Exercise(db.Model, SerializerMixin):
    __tablename__ = 'exercises'

    # If you remove '-exerciselists.exercise' from the serialize_rules exercise will render 
    # inside of exerciselists array
    serialize_rules = ( '-workouts.exerciselists', 'workouts', 
                       '-workouts.exercises')

    id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String, nullable=False)
    description = db.Column(db.String)
    muscles_hit = db.Column(db.String, nullable=False)

    exerciselists = db.relationship('ExerciseList', backref='exercise')
    workouts = association_proxy('exerciselists', 'workout')



class ExerciseList(db.Model, SerializerMixin):
    __tablename__='exerciselists'

    # serialize_rules=( '-exercise.exerciselists', '-workout.exerciselists', '-workout_id', '-exercise_id',  )
    serialize_rules = ( '-exercise.exerciselists', '-workout.exerciselists', '-workout.exercises' )


    id = db.Column(db.Integer, primary_key=True)

    workout_id = db.Column(db.Integer, db.ForeignKey('workouts.id'), nullable=False)
    exercise_id = db.Column(db.Integer, db.ForeignKey('exercises.id'), nullable=False)



