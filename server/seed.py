from app import app
from models import db, Exercise, Workout

if __name__ == '__main__':
    with app.app_context():
        print('Creating Exercise and Workout...')

        Exercise.query.delete()
        Workout.query.delete()

        e1 = Exercise(exercise_name='Bicep curl', description='Begin with dumbells at your side, palms facing forward. With elbows remaining stationary at your side, bring weight up to shoulder level, descend weight back down to your sides, repeat.', muscles_hit='Biceps', image_url='https://www.inspireusafoundation.org/wp-content/uploads/2023/01/inner-bicep-curl-muscles.png')
        e2 = Exercise(exercise_name='Hammer curl', description='Begin with dumbells at your side, palms facing your body. With straight wrists and stationary elbows bring the weight straight up until they nearly touch your shoulders. Descend the weight, repeat.', muscles_hit='Biceps and forearms', image_url='https://www.inspireusafoundation.org/wp-content/uploads/2023/01/inner-bicep-curl-muscles.png')
        e3 = Exercise(exercise_name='Concentration curl', description='This exercise is great for isolating the bicep tissue. Begin in a seated position, rest the elbow of the arm with the weight on the inside of your thigh. Allow the weight to descend, once the arm has straightened, curl the weight back up to your chest, repeat.', muscles_hit='Biceps', image_url='')
        e4 = Exercise(exercise_name='Ez-Bar curl', description='Begin standing with an Ez-Bar at your waist, palms facing away from you. Curl the weight up to your chest, descend it back down to your waist, repeat.', muscles_hit='Biceps', image_url='')
        
        e5 = Exercise(exercise_name='Tricep Dips', description='With a narrow grip dip your body down so your triceps are parallel with the ground, raise yourself up to a straight arm position, repeat.', muscles_hit='Triceps', image_url='')
        e6 = Exercise(exercise_name='Push-down', description='From a standing position extend your arms down to a straight position, allow the weight to ascend so your hands are in front of your chest, repeat.', muscles_hit='Triceps', image_url='')
        e7 = Exercise(exercise_name='Close-grip bench press', description='From a lying position grab a barbell. With a close grip descend the barbell to your chest, ascend it to a straight armed position, repeat.', muscles_hit='Triceps and Chest', image_url='')
        e8 = Exercise(exercise_name='Lying triceps extensions', description='From a lying position and arms straightened, keeping your elbows in a stationary position, descend the weight to just over your forehead, ascend the weight back to a straight armed position, repeat.', muscles_hit='Triceps', image_url='')
        
        e9 = Exercise(exercise_name='Dumbbell Wrist Flexion', description='Place your arm on a bench, palm up, ascend the weight up towards the sky, descend the weight back towards the ground, repeat.', muscles_hit='Forearms', image_url='')
        e10 = Exercise(exercise_name='Dumbbell Wrist Extension', description='Place your arm on a bench, palm down, ascend the weight up towards the sky, descend the weight back towards the ground, repeat.', muscles_hit='Forearms', image_url='')
        e11 = Exercise(exercise_name='Pull-Up Bar Hang', description='Grip a bar that is tall enough so your body doesn\'t touch the ground and allow your body to hang and relax. This is a great way to mobilize the shoulders and develop the forearms.', muscles_hit='Forearms', image_url='')
        e12 = Exercise(exercise_name='Farmer\'s Walk', description='Lift a weight, preferrably something you consider to be fairly heavy, let the weight hang by your side and slowly walk around the room.', muscles_hit='Forearms/ Full body', image_url='')
        
        e13 = Exercise(exercise_name='Side lateral raise', description='With a dumbell in each hand raise your arms laterally until they are parallel with the ground, allow them to descend back to the side of your body, repeat.', muscles_hit='Shoulders', image_url='')
        e14 = Exercise(exercise_name='Overhead press', description='While in either a seated or standing position take either dumbells or barbells and press them up over your head until your arms are nearly straight, allow the weight to descend, repeat.', muscles_hit='Shoulders', image_url='')
        e15 = Exercise(exercise_name='Rear delt fly', description='While in either a seated or standing position, hinge your hips back so your torso is nearly parallel with the ground, raise the dumbells out to the side like you\'re flying, allow them to descend so your arms are hanging just above the ground, repeat.', muscles_hit='Shoulders', image_url='')
        e16 = Exercise(exercise_name='Front raise', description='With a dumbell in each hand and arms hanging by your side raise the weight in front of your body, keeping mostly straight arms, until your arms are parallel to the ground, allow the weight to descend until your arms are by your side once again, repeat.', muscles_hit='Shoulders', image_url='')
        
        e17 = Exercise(exercise_name='Bench press', description='With your arms fully extended and a barbell in hand, allow the weight to descend to your chest and then push it back up until the arms are straight again, repeat.', muscles_hit='Pectorals', image_url='')
        e18 = Exercise(exercise_name='Dumbell bench press', description='With your arms fully extended and a dumbell in each hand, allow the weight to descend until your upper arms are parallel to the ground, push the weight back up until your arms are straight again, repeat.', muscles_hit='Pectorals', image_url='')
        e19 = Exercise(exercise_name='Push-up', description='With your body in a plant position, arms fully extended, allow your body to descend until your upper arms are parallel to the ground, push yourself up until your arms are straight, repeat.', muscles_hit='Pectorals', image_url='')
        e20 = Exercise(exercise_name='Cable crossover', description='From a standing position grab a cable in each hand, take a forward stance and, while keeping your arms straight, pull them together until your hands touch or are close to doing so, allow the weight to come back out until your arms are spread like in a flying position once again, repeat.', muscles_hit='Pectorals', image_url='')
        
        e21 = Exercise(exercise_name='Pull-up', description='', muscles_hit='Upperback', image_url='')
        e22 = Exercise(exercise_name='Wide-grip barbell bent-over row', description='', muscles_hit='Upperback', image_url='')
        e23 = Exercise(exercise_name='Shrugs', description='', muscles_hit='Upperback', image_url='')
        e24 = Exercise(exercise_name='Close-grip seated cable row', description='', muscles_hit='Upperback', image_url='')
        
        e25 = Exercise(exercise_name='Supine bridge', description='', muscles_hit='Lowerback', image_url='')
        e26 = Exercise(exercise_name='Back extension', description='', muscles_hit='Lowerback', image_url='')
        e27 = Exercise(exercise_name='Good-morning', description='', muscles_hit='Lowerback', image_url='')
        e28 = Exercise(exercise_name='Romanian deadlift', description='', muscles_hit='Lowerback', image_url='')
        
        e29 = Exercise(exercise_name='Sit-up', description='', muscles_hit='Abdomen', image_url='')
        e30 = Exercise(exercise_name='Bicycle crunch', description='', muscles_hit='Abdomen', image_url='')
        e31 = Exercise(exercise_name='Reverse crunch', description='', muscles_hit='Abdomen', image_url='')
        e32 = Exercise(exercise_name='Oblique crunch', description='', muscles_hit='Abdomen', image_url='')
        
        e33 = Exercise(exercise_name='Wide-legged squat', description='', muscles_hit='Glutes', image_url='')
        e34 = Exercise(exercise_name='Reverse lunge', description='', muscles_hit='Glutes', image_url='')
        e35 = Exercise(exercise_name='Barbell hip thrust', description='', muscles_hit='Glutes', image_url='')
        e36 = Exercise(exercise_name='Jump squat', description='', muscles_hit='Glutes', image_url='')
        
        e37 = Exercise(exercise_name='Close-legged squat', description='', muscles_hit='Quadriceps', image_url='')
        e38 = Exercise(exercise_name='Leg extension', description='', muscles_hit='Quadriceps', image_url='')
        e39 = Exercise(exercise_name='Bulgarian split squat', description='', muscles_hit='Quadriceps', image_url='')
        e40 = Exercise(exercise_name='Wall sit', description='', muscles_hit='Quadriceps', image_url='')
        
        e41 = Exercise(exercise_name='Leg curl', description='', muscles_hit='Hamstrings', image_url='')
        e42 = Exercise(exercise_name='Single-leg glute bridge', description='', muscles_hit='Hamstrings', image_url='')
        e43 = Exercise(exercise_name='Kettlebell swing', description='', muscles_hit='Hamstrings', image_url='')
        e44 = Exercise(exercise_name='Single-leg deadlift', description='', muscles_hit='Hamstrings', image_url='')
        
        e45 = Exercise(exercise_name='Calf raises', description='', muscles_hit='Calves', image_url='')
        e46 = Exercise(exercise_name='Single leg calf raise', description='', muscles_hit='Calves', image_url='')
        e47 = Exercise(exercise_name='Calf press', description='', muscles_hit='Calves', image_url='')
        e48 = Exercise(exercise_name='Farmer\'s walk(on tiptoes)', description='', muscles_hit='Calves', image_url='')
        
        e49 = Exercise(exercise_name='Shrugs', description='', muscles_hit='Neck', image_url='')
        e50 = Exercise(exercise_name='Lying neck exerrcises', description='', muscles_hit='Neck', image_url='')
        
        
        exercises = [ e1, e2, e3, e4, e5, e6, e7, e8, e9, e10,
                    e11, e12, e13, e14, e15, e16, e17, e18, e19,
                    e20, e21, e22, e23, e24, e25, e26, e27, e28, 
                    e29, e30, e31, e32, e33, e34, e35, e36, e37,
                    e38, e39, e40, e41, e42, e43, e44, e45, e46,
                    e47, e48, e49, e50 ]

        #Create an example workout for the user to get ideas from

        w1 = Workout(workout_name = 'Monday Plum Day', user_id = '')
        w2 = Workout(workout_name = 'Tuesday Groove Day', user_id = '')
        w3 = Workout(workout_name = 'Wednesday Prince Day', user_id = '')
        w4 = Workout(workout_name = 'Thursday Curves Day', user_id = '')
        w5 = Workout(workout_name = 'Friday My Day', user_id = '')
        w6 = Workout(workout_name = 'Saturday Matters Day', user_id = '')
        w7 = Workout(workout_name = 'Sunday Fun Day', user_id = '')

        workouts = [ w1, w2, w3, w4, w5, w6, w7 ]

        db.session.add_all(exercises)
        db.session.add_all(workouts)
        db.session.commit()
        print('Seeding done!')