import './WorkoutList.css'
import {useState} from 'react'


function WorkoutList( { workout, removeExerciseFromState, exerciseLists } ) {
    

    
    const handleDelete = (exercise_id) => {
       
        fetch(`/exercise_lists/1`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                workout_id: workout.id,
                exercise_id 
            })
        })  .then(r => r.json())
            .then(data => console.log(data))
        // removeExerciseFromState(id)
    }
   
    
   
    // console.log(removeExerciseFromState)
    // const mappedExercises = workout.exercises.map((exercise, index) => (
    //     <div key={index}>
    //     <p>{exercise.id}</p>
    //     </div>
    // ))

    // console.log(workout.id)
    

    
    
    const [showWorkout, setShowWorkout] = useState(false)
    //Whenever I change to a different page or refresh the current page the exercise renders in the workout
    //I need to make it render immediately upon posting it to a workout

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
            <button className = 'button' onClick={() => handleDelete(exercise.id)} >🗑️</button>
            </div>
        ))}
  </div>
);
}

export default WorkoutList