import { useEffect, useState } from 'react'
import WorkoutList from './WorkoutList'


function WorkoutMapped({workout}){
    const [ exerciseList, setExerciseList ] = useState([])
    const [ workoutId, setWorkoutId ] = useState('')
    const [ exerciseId, setExerciseId ] = useState('')

    function handleWorkoutId(e) {
        setWorkoutId(e.target.value)
    }
    function handleExerciseId(e) {
        setExerciseId(e.target.value)
    }

    const handleNewExercise = newExercise => {
        setExerciseList( [ ...exerciseList, newExercise ] )
      }

    const workouts = workout.map((workoutObj) =>
    <WorkoutList
    key = {workoutObj.id}
    workout= {workoutObj}
    /> )

    useEffect(() => {
        fetch( '/exercise_lists' )
        .then( res => res.json() )
        .then( setExerciseList )
    }, [])

    const handleSubmit = e => {
        e.preventDefault()
        const newExerciseList = {
           exercise_id: exerciseId,
           workout_id: workoutId
        }
    
    fetch( '/exercise_lists' , {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newExerciseList)
    })
        .then(r => r.json())
        .then(handleNewExercise)
        e.target.reset()
    }
    

    return(
        <div>
            <form onSubmit= {handleSubmit}>
                <input onChange = {handleWorkoutId} type='number' name='workout_id' placeholder='Workout number' />
                <input onChange = {handleExerciseId} type='number' name='exercise_id' placeholder='Exercise number'/>
                <button type='submit'>Add Exercise</button>
            </form>
            {workouts}
        </div>
    )
}



export default WorkoutMapped