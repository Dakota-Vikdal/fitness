import './WorkoutList.css'
import {useState} from 'react'


function WorkoutList( { workout } ) {
    console.log(workout)
    const [showWorkout, setShowWorkout] = useState(false)

    const handleClick = () => {
        setShowWorkout(!showWorkout)
    }

    return (
    <div>
        <div className='big-muss' onClick={handleClick}>
            <button>{workout.workout_name}</button>
        </div>
        {showWorkout &&
        workout.exercises.map((exercise, index) => (
            <div key={index} className = 'exercises'>
            <p>{exercise.exercise_name}</p>
            <p>{exercise.description}</p>
            <p>{exercise.muscles_hit}</p>
            <p>{exercise.image_url}</p>
            </div>
        ))}
  </div>
);
}

//     return(
//         <div className='big-muss'>
//             <p>{workout.workout_name}</p>
//             <p>{workout.exercises[0].exercise_name}</p>
//             <p>{workout.exercises[0].description}</p>
//             <p>{workout.exercises[0].muscles_hit}</p>
//             <p>{workout.exercises[0].image_url}</p>
//         </div>
//     )
// }


export default WorkoutList