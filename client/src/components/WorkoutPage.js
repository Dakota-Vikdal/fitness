import { useEffect, useState } from 'react'
import WorkoutMapped from './WorkoutMapped'

function WorkoutPage() {

    const [workout, setWorkout] = useState([])

    const [exercise, setExercise] = useState([])
    const [exerciseDropDown, setExerciseDropDown] = useState('')

    const myFilter = filteredExercises =>
        filteredExercises.exercise_name.includes(exerciseDropDown)
    

    const exerciseList = exercise.filter(myFilter)
    
    const filteredExercise = newExercise => {
        setExerciseDropDown(newExercise)
    }
    

    useEffect(() => {
        fetch('http://localhost:5555/exercises')
            .then(r => {
                if(r.ok){
                    r.json().then(exercise => setExercise(exercise))
                } else {
                    console.log('uh-oh, something went wrong')
                }  
            })
    },[])

    const [ exerciseLists, setExerciseList ] = useState([])

    const handleNewExercise = newExercise => {
        setExerciseList( [ ...exerciseList, newExercise ] )
      }

    useEffect(() => {
        fetch( '/exercise_lists' )
        .then( res => res.json() )
        .then( setExerciseList )
    }, [])
    console.log(exerciseLists)

    /////////////////////////////////////////////////////////////////////
    const removeExerciseFromState = goodbyeExercise => {
        const filteredArray = exerciseLists.filter(goodbyeExerciseObj => {
          return goodbyeExerciseObj.exercise_id !== goodbyeExercise
        })
        setWorkout(filteredArray)
      }
    /////////////////////////////////////////////////////////////////////
   
    
    useEffect(() => {
        fetch(`http://localhost:5555/workouts`)
            .then(r => {
                if(r.ok){
                    r.json().then(workout => {
                        setWorkout(workout)
                    })
                } else {
                    r.json().then(console.log('get request did not work...'))
                }
            })       
    },[])
   
    
    
    return(
        <div>
            <WorkoutMapped 
                workout= {workout} 
                filteredExercise={filteredExercise} 
                exerciseList={exerciseList}
                handleNewExercise={handleNewExercise}
                exerciseLists={exerciseLists}
                removeExerciseFromState={removeExerciseFromState}
                />
               
        </div>
    )
}

export default WorkoutPage