from app import app
from models import db, Exercise, Workout

if __name__ == '__main__':
    with app.app_context():
        print('Creating Exercise and Workout...')

        Exercise.query.delete()
        Workout.query.delete()

        e1 = Exercise(exercise_name='Bicep curl', description='Begin with dumbells at your side, palms facing forward. With elbows remaining stationary at your side, bring weight up to shoulder level, descend weight back down to your sides, repeat.', muscles_hit='Biceps', image_url='data:image/jpeg;base64,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')
        e2 = Exercise(exercise_name='Hammer curl', description='Begin with dumbells at your side, palms facing your body. With straight wrists and stationary elbows bring the weight straight up until they nearly touch your shoulders. Descend the weight, repeat.', muscles_hit='Biceps and forearms', image_url='')
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