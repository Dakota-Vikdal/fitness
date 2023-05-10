from flask import request, make_response, session, jsonify, flash
from flask_restful import Resource, Api
from sqlalchemy.exc import IntegrityError
from config import app, db, bcrypt
from models import User, Workout, ExerciseList, Exercise
from flask_abort import abort
# import ipdb

api = Api(app)

app.secret_key = b'\xa8\x96G\xf2\xfbM{\x8e\xfdt\x92I\xef\xf3\xd7\x98'

class HomePage(Resource):
    def get(self):
        return {'message': 'Welcome to my Home Page'}, 200
    
api.add_resource(HomePage, '/')

# @app.before_request
# def check_if_logged_in():
#     logged_in = session.get( 'user_id' )
#     signing_up = 'users' in request.path and 'POST' in request.method
#     logging_in = 'login' in request.path and 'POST' in request.method

#     if not logged_in and not signing_up and not logging_in:
#         return make_response( {'message': 'please log in' }, 401)

    # open_access_list = [
    #     'login',
    #     'check_session',
    #     'signup'
    # ]

    # if (request.endpoint) not in open_access_list and (not session.get('user_id')):
    #     response = make_response( {'error': '401 Unauthorized'}, 401)
    #     return response


class Users(Resource):
    def post(self):
        form_json = request.get_json()
        new_user = User(
            username=form_json['username'],
            email=form_json['email']
        )
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
        try:
            form_json = request.get_json()
            new_user = User(username=form_json['username'], email=form_json['email'])
            new_user.password_hash = form_json['password']
            if new_user != ['username']:

                db.session.add(new_user)
                db.session.commit()
                session['user_id'] = new_user.id
                return make_response(new_user.to_dict(), 201)
        except:
            abort(401, "That username is already in use")
        # response = make_response(
        #     new_user.to_dict(),
        #     201
        # )
        # return response
        # response = make_response({'msg':'Not Authorized'}, 401)
        # return response
    

    # data = request.get_json()
    #     username = data.get('username')
    #     password = data.get('password')

    #     user = User.query.filter(User.username == username).first()

    #     if user:
    #         if user.authenticate(password):
    #             session['user_id'] = user.id
    #             return make_response(user.to_dict(), 200)
            
    #     response = make_response({'msg':'Not Authorized'}, 401)
    #     return response
    
api.add_resource(SignUp, '/signup', endpoint='signup')





class Login(Resource):

    def post(self):
        # try:
        #     user = User.query.filter_by(username=request.get_json['username']).first()
        #     if user.authenticate(request.get_json['password']):
        #         session['user_id'] = user.id
        #         response = make_response(
        #             user.to_dict(),
        #             200
        #         )
        #         return response
        # except:
        #     response = make_response({"msg": "Incorrect username or password"}, 401)
        #     return response
        
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
    
api.add_resource(Login, '/login', endpoint='login')




class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        response = make_response({'msg':'user has been logged out yo'}, 200)
        return response
api.add_resource(Logout, '/logout', endpoint='logout')




class CheckSession(Resource):

    def get(self): 

        if session.get('user_id'):

            user = User.query.filter_by(id=session['user_id']).first()

            user_dict = user.to_dict()

            response = make_response(user_dict, 200)

            return response

        response = make_response({'error': '401 Unauthorized'}, 401)

        return response

# api.add_resource(CheckSession, '/check_session', endpoint='check_session')

        # user = User.query.filter(User.id == session.get('user_id')).first()
        # if user:
        #     return user.to_dict()
        # else:
        #     return {'message': '401: Not Authorized'}, 401
    
api.add_resource(CheckSession, '/check_session', endpoint='check_session')





class ClearSession(Resource):

    def delete(self):

        session['page_views'] = None
        session['user_id'] = None

        return {}, 204
api.add_resource(ClearSession, '/clear', endpoint='clear')










class Workouts( Resource ):
    def get(self):
        w_list = [w.to_dict() for w in Workout.query.all()]

        if w_list == None:
            return make_response({'msg': 'error bois'}, 404)
        return make_response(w_list, 200)
        

        # w_list = []
        # for w in Workout.query.all():
        #     w_dict = {
        #         'id': w.id,
        #         'workout_name': w.workout_name
        #     }
        #     w_list.append(w_dict)
        
    ####I removed this from my plan because it was too much of a hassle...
    ##I'll keep it here for now, just in case I change my mind############
    # def post(self):
    #     data = request.get_json()
    #     workout = Workout(workout_name = data['workout_name'],
    #                       user_id = data['user_id']
    #                       )
    #     db.session.add(workout)
    #     db.session.commit()
    #     return make_response(workout.to_dict(), 201)
    
api.add_resource(Workouts, '/workouts', endpoint='workouts')




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
        w_instance = Workout.query.filter_by( id = id ).first()
        if w_instance == None:
            return make_response({'error':'Workout Not Found'}, 404)
        db.session.delete(w_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(WorkoutsById, '/workouts/<int:id>')


class Exercises( Resource ):
    def get(self):
        # if not session['user_id']:
        #     return {'error': 'Unauthorized'}, 401
        # else:
            e_list = []
            for e in Exercise.query.all():
                e_list.append( e.to_dict() )
                # e_dict = {
                #     'id': e.id,
                #     'exercise_name': e.exercise_name,
                #     'description': e.description,
                #     'muscles_hit': e.muscles_hit
                # }
                # e_list.append(e_dict)
            return make_response(e_list, 200)
    
    def post(self):
        # user = User.query.all().filter_by( id == session.get('user_id'))
        # if not user and session.get('user_id'):
        #     return {'yo': 'not logged in homie!'}

        
        # if not session['user_id']:
        #     return {'error': 'Unauthorized'}, 401
        # else:
        data = request.get_json()
        exercise = Exercise(exercise_name = data['exercise_name'],
                        description = data['description'],
                        muscles_hit = data['muscles_hit'])
        db.session.add(exercise)
        db.session.commit()
        return make_response(exercise.to_dict(), 201)

api.add_resource(Exercises, '/exercises', endpoint= 'exercises')

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
    

    def delete(self, id):
        e_instance = Exercise.query.filter_by( id = id ).first()
        if e_instance == None:
            return make_response({'error':'Exercise Not Found'}, 404)
        db.session.delete(e_instance)
        db.session.commit()
        return make_response({}, 204)
    
api.add_resource(ExercisesById, '/exercises/<int:id>')











class ExerciseLists( Resource ):
    def get(self):
        el_list = [el.to_dict() for el in ExerciseList.query.all()]
        
        # el_list = []
        # for el in ExerciseList.query.all():
        #     el_dict = {
        #         'id': el.id,
        #         'workout_id':el.workout_id,
        #         'exercise_id': el.exercise_id
        #     }
        #     el_list.append(el_dict)
        return make_response(el_list, 200)

    def post(self):
        data = request.get_json()
        exercise_list = ExerciseList( workout_id = data['workout_id'],
                                   exercise_id = data['exercise_id'] )
        db.session.add( exercise_list )
        try:
            db.session.commit()
            return make_response( exercise_list.to_dict(), 201 )
        except:
            db.session.rollback()
            return make_response( { 'error': 'Validation errors'}, 404)
    
api.add_resource( ExerciseLists, '/exercise_lists' )

class ExerciseListsById( Resource ):
    def get(self, id):
        el_instance = ExerciseList.query.filter_by( id = id ).first()
        if el_instance == None:
            return make_response({"error": "Exercise not found"}, 404)
        return make_response(el_instance.to_dict(), 200)
    

 
    def delete( self, id ):
        data = request.get_json()
        # return make_response( { 'msg': data } , 200)
        # find the workout
        w_instance = Workout.query.filter_by( id = id ).first()
        
        # look at the exerciselists for that workout
        
        # find the instance of exerciselist with the same exercise_id as the one we're sending
        # delete that insstance of exerciselist



        # ipdb.set_trace()
        # el_instance = ExerciseList.query.filter_by( id = id ).first()
        # if el_instance == None:
        #     return make_response({ "error": "exerciselist not found" }, 404)
        # db.session.delete( el_instance )
        # db.session.commit()
        # return make_response({}, 204)
    
api.add_resource(ExerciseListsById, '/exercise_lists/<int:id>')


if __name__ == '__main__':
    app.run( port = 5555, debug = True )