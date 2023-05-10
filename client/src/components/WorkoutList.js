import './WorkoutList.css'
import {useState} from 'react'


function WorkoutList( { workout, removeExerciseFromState, exerciseLists } ) {
    


    // const handleDelete = () => {
    //     fetch(`http://127.0.0.1:5555/exercise_lists/${exerciseLists.id}`, {method: 'DELETE'})
    //     removeExerciseFromState(exerciseLists.id)
    // }
   
    
   
    // console.log(removeExerciseFromState)
    // const mappedExercises = workout.exercises.map((exercise, index) => (
    //     <div key={index}>
    //     <p>{exercise.id}</p>
    //     </div>
    // ))

    // console.log(workout.id)
    

    // const handleDelete = () => {
    //     fetch(`/workouts/${workout.id}`, {method: 'DELETE'})
    //     removeExerciseFromState(workout.id)
    // }
    
   
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
            <p>{exercise.id}</p>
            {/* <button className = 'button' onClick={handleDelete} >🗑️</button> */}
            </div>
        ))}
  </div>
);
}

export default WorkoutList