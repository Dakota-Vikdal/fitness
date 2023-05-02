from flask import request, make_response, session, jsonify, flash
from flask_restful import Resource, Api
from sqlalchemy.exc import IntegrityError
#where should i import api from? I just removed it from config
from config import app, db, bcrypt
from models import User, Workout, ExerciseList, Exercise

api = Api(app)


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
    
api.add_resource(SignUp, '/signup', endpoint='signup')


class Login(Resource):

    def post(self):
        data = request.get_json()
        username = data.get('username')
        password = data.get('password')

        user = User.query.filter(User.username == username).first()

        if user:
            if user.authenticate(password):
                session['user_id'] = user.id
                return make_response(user.to_dict(), 200)
            
        response = make_response({'msg':'Not Authorized'}, 401)
        return response
    
        # user = User.query.filter(
        #     User.username == request.get_json()['username']
        # ).first()

        # session['user_id'] = user.id
        # return user.to_dict()

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
        response = make_response({'msg':'user has been logged out yo'}, 200)
        return response
api.add_resource(Logout, '/logout', endpoint='logout')


class CheckSession(Resource):

    def get(self):      
        user = User.query.filter(User.id == session.get('user_id')).first()
        if user:
            return user.to_dict()
        else:
            return {'message': '401: Not Authorized'}, 401

        # user_id = session['user_id']
        # if user_id:
        #     user = User.query.filter(User.id == user_id).first()
        #     return user.to_dict(), 200

        # return {}, 401
    
api.add_resource(CheckSession, '/check_session', endpoint='check_session')


class ClearSession(Resource):

    def delete(self):

        session['page_views'] = None
        session['user_id'] = None

        return {}, 204
api.add_resource(ClearSession, '/clear', endpoint='clear')










class Workouts( Resource ):
    def get(self):
        w_list = []
        for w in Workout.query.all():
            w_dict = {
                'id': w.id,
                'workout_name': w.workout_name
            }
            w_list.append(w_dict)
        return make_response(w_list, 200)
    
    def post(self):
        data = request.get_json()
        workout = Workout(workout_name = data['workout_name'],
                          user_id = data['user_id'])
        db.session.add(workout)
        db.session.commit()
        return make_response(workout.to_dict(), 201)
    
api.add_resource(Workouts, '/workouts')

class WorkoutsById( Resource ):
    def get(self, id):
        w_instance = Workout.query.filter_by(id=id).first()
        if w_instance == None:
            return make_response({"error": "Workout not found"}, 404)
        return make_response(w_instance.to_dict(), 200)
    
    def patch(self, id):
        w = Workout.query.filter_by( id = id ).first()
        if w == None:
            return make_response({'error': 'Workout Not Found.'}, 404)
        data = request.get_json()
        for key in data.keys():
            setattr(w, key, data[key])
        db.session.add(w)
        db.session.commit()
        return make_response(w.to_dict(), 200)
    
    def delete(self, id):
        w_instance = Workout.query.filter_by(id=id).first()
        if w_instance == None:
            return make_response({'error':'Workout Not Found'}, 404)
        db.session.delete(w_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(WorkoutsById, '/workouts/<int:id>')










class Exercises( Resource ):
    def get(self):
        e_list = []
        for e in Exercise.query.all():
            e_dict = {
                'id': e.id,
                'exercise_name': e.exercise_name,
                'description': e.description,
                'muscles_hit': e.muscles_hit
            }
            e_list.append(e_dict)
        return make_response(e_list, 200)
    
    def post(self):
        data = request.get_json()
        exercise = Exercise(exercise_name = data['exercise_name'],
                          description = data['description'],
                          muscles_hit = data['muscles_hit'])
        db.session.add(exercise)
        db.session.commit()
        return make_response(exercise.to_dict(), 201)

api.add_resource(Exercises, '/exercises')

class ExercisesById( Resource ):
    def get(self, id):
        e_instance = Exercise.query.filter_by(id=id).first()
        if e_instance == None:
            return make_response({"error": "Exercise not found"}, 404)
        return make_response(e_instance.to_dict(), 200)
    
    def patch(self, id):
        e = Exercise.query.filter_by( id = id ).first()
        if e == None:
            return make_response({'error': 'Exercise Not Found.'}, 404)
        data = request.get_json()
        for key in data.keys():
            setattr(e, key, data[key])
        db.session.add(e)
        db.session.commit()
        return make_response(e.to_dict(), 200)
    

#########################################################
#How can I delete an exercise that belongs to a workout?#
#########################################################
    def delete(self, id):
        e_instance = Exercise.query.filter_by(id=id).first()
        if e_instance == None:
            return make_response({'error':'Exercise Not Found'}, 404)
        db.session.delete(e_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(ExercisesById, '/exercises/<int:id>')











class ExerciseLists( Resource ):
    def get(self):
        el_list = []
        for el in ExerciseList.query.all():
            el_dict = {
                'id': el.id,
                'workout_id':el.workout_id,
                'exercise_id': el.exercise_id
            }
            el_list.append(el_dict)
        return make_response(el_list, 200)

    def post(self):
        data = request.get_json()
        exercise_list = ExerciseList(workout_id = data['workout_id'],
                                   exercise_id = data['exercise_id'])
        db.session.add(exercise_list)
        try:
            db.session.commit()
            return make_response(exercise_list.to_dict(), 201)
        except:
            db.session.rollback()
            return make_response( { 'error': 'Validation errors'}, 404)
    
api.add_resource(ExerciseLists, '/exercise_lists')

class ExerciseListsById( Resource ):
    def delete(self, id):
        el_instance =ExerciseList.query.filter_by(id=id).first()
        if el_instance == None:
            return make_response({"error": "VendorSweet not found"}, 404)
        db.session.delete(el_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(ExerciseListsById, '/exercise_lists/<int:id>')


if __name__ == '__main__':
    app.run( port = 5555, debug = True )