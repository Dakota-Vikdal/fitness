import { useEffect, useState } from 'react'
import WorkoutList from './WorkoutList'


function WorkoutMapped({ workout, filteredExercise, exerciseArray }){
    const [ exerciseList, setExerciseList ] = useState([])
    const [ workoutId, setWorkoutId ] = useState('')
    const [ exerciseId, setExerciseId ] = useState('')
    // console.log(exerciseArray)
    // console.log(filteredExercise)
    useEffect(() => {
        fetch( '/exercise_lists' )
        .then( res => res.json() )
        .then( setExerciseList )
    }, [])
    

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
    workout = {workoutObj}
    /> )

   

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
        .then((data) => {
            handleNewExercise(data)})
        e.target.reset()
    }
    
    return(
        <div>
            <form onSubmit= {handleSubmit}>
                <select onChange = {handleExerciseId} type='number' name='exercise_id' placeholder='exercises'>
                    {exerciseArray &&
                        exerciseArray.map(eObj => {
                            return <option value={eObj.id}>{eObj.exercise_name}</option>
                    })}
                </select>
                <select onChange = {handleWorkoutId} type='number' name='workout_id' placeholder='workouts'>
                   {workout.map(wObj => {
                        return <option value={wObj.id}>{wObj.workout_name}</option>
                   })} 
                </select>
                <button type='submit'>Add Exercise</button>
            </form>
            {workouts}
        </div>
    )
}



export default WorkoutMapped