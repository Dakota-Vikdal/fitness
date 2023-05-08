import { useEffect, useState } from 'react'
import WorkoutMapped from './WorkoutMapped'

function WorkoutPage() {

    const [workout, setWorkout] = useState([])

    const removeExerciseFromState = goodbyeExercise => {
        const filteredArray = workout.filter(goodbyeExerciseObj => {
          return goodbyeExerciseObj.exercises.id !== goodbyeExercise
        })
        setWorkout(filteredArray)
      }
   

    
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



    

    // const addExercise = (exercise) => {
    //     const exerciseArray = [...workout, exercise]
    //     fetch('http://localhost:5555/workouts', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(exercise)
    // })
    // .then(res => res.json())
    // setWorkout(addExercise)
    // }
    


    // const addExercise = (mO) => {
    //     const exerciseArray = [...exercise, mO]
    //     fetch('http://localhost:5555/exercises', {
    //       method: 'POST',
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify(mO)
    //     })
    //     .then(response => response.json())
    //     setExercise(exerciseArray)
    //   }
    
    return(
        <div>
            <WorkoutMapped workout= {workout} removeExerciseFromState={removeExerciseFromState} />
        </div>
    )
}

export default WorkoutPage