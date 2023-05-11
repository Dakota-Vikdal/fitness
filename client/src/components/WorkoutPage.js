import { useEffect, useState } from 'react'
import WorkoutMapped from './WorkoutMapped'

function WorkoutPage() {
    //workout is really an array of workouts
    const [workout, setWorkout] = useState([])
    console.log(workout)



   
    

    const addExerciseToWorkout = ( exerciseObj, workout_id ) => {
        const workoutArray = [ ...workout ]
        
        // console.log(exerciseObj.exercise.id)
        const workoutToUpdate = workoutArray.find( (workout) => workout.id === exerciseObj.workout.id )
        
        console.log(workoutToUpdate)

        if (workoutToUpdate) {
            // Add the exercise to the workout.exercises array
        workoutToUpdate.exercises.push(exerciseObj.exercise)
          
            // Change state to the new copy
        setWorkout(workoutArray)
        console.log(workoutToUpdate)
        // console.log(workoutArray)
        }
        
        // console.log(workoutToUpdate)
        /*
        step 1: make a new copy of state
        step 2: find the workout we want to change using the workout_id
        step 3: add exercise to the workout.exercises
        step 4: change state to the new copy
        */
    }



    // const addExerciseToWorkout = ( exerciseObj, workout_id ) => {
    //     const workoutArray = [ ...workout, exerciseObj ]
        
    //     const workoutToUpdate = workoutArray.find(workout => workout.id === workout_id)

    //     if (workoutToUpdate) {
    //         // Add the exercise to the workout.exercises array
    //     workoutArray.exercises.push(exerciseObj)
          
    //         // Change state to the new copy
    //     setWorkout(workoutArray)
    //     console.log(workoutArray)
    //     }
        
    //     // console.log(workoutToUpdate)
    //     /*
    //     step 1: make a new copy of state
    //     step 2: find the workout we want to change using the workout_id
    //     step 3: add exercise to the workout.exercises
    //     step 4: change state to the new copy
    //     */
    // }
    
   

    const [exercise, setExercise] = useState([])
    const [exerciseDropDown, setExerciseDropDown] = useState('')

    const myFilter = filteredExercises =>
        filteredExercises.exercise_name.includes(exerciseDropDown)
    

    const exerciseList = exercise.filter(myFilter)
    
    const filteredExercise = newExercise => {
        setExerciseDropDown(newExercise)
    }
    

    useEffect(() => {
        fetch('/exercises')
            .then(r => {
                if(r.ok){
                    r.json().then(exercise => setExercise(exercise))
                } 
            })
    },[])

    // const [ exerciseLists, setExerciseList ] = useState([])
    

    // const handleNewExercise = newExercise => {
    //     setExerciseList( [ ...exerciseList, newExercise ] )
        
    //   }
      

    // useEffect(() => {
    //     fetch( '/exercise_lists' )
    //     .then( res => res.json() )
    //     .then( setExerciseList )
    // }, [])
    

    /////////////////////////////////////////////////////////////////////
    // const removeExerciseFromState = goodbyeExercise => {
    //     const filteredArray = exerciseLists.filter(goodbyeExerciseObj => {
    //       return goodbyeExerciseObj.exercise_id !== goodbyeExercise
    //     })
    //     setWorkout(filteredArray)
    //   }
    /////////////////////////////////////////////////////////////////////
//    console.log(exerciseLists)
    
    useEffect(() => {
        fetch(`/workouts`)
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
                addExerciseToWorkout = {addExerciseToWorkout}




                // handleNewExercise={handleNewExercise}
                // exerciseLists={exerciseLists}
                // removeExerciseFromState={removeExerciseFromState}
                />
               
        </div>
    )
}

export default WorkoutPage