import { useEffect, useState } from 'react'
import WorkoutMapped from './WorkoutMapped'

function WorkoutPage() {

    const [workout, setWorkout] = useState([])

    const [exercise, setExercise] = useState([])
    const [exerciseDropDown, setExerciseDropDown] = useState('')

    const myFilter = filteredExercises =>
        filteredExercises.exercise_name.includes(exerciseDropDown)
    

    const exerciseList = exercise.filter(myFilter)
    console.log(exerciseList)
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

    
   

    // const removeExerciseFromState = goodbyeExercise => {
    //     const filteredArray = workout.filter(goodbyeExerciseObj => {
    //       return goodbyeExerciseObj.exercises.id !== goodbyeExercise
    //     })
    //     setWorkout(filteredArray)
    //   }
   

    
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
    // setWorkout(exerciseArray)
    // }
   
    
    
    return(
        <div>
            <WorkoutMapped workout= {workout} filteredExercise={filteredExercise} exerciseArray={exerciseList} />
        </div>
    )
}

export default WorkoutPage