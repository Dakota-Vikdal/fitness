import Exercise from './Exercise'
import React, { useContext } from "react";
import {ExercisesContext} from '../context/ExerciseContext'

function ExerciseMapped({exercise}) {
    
    // const { exercise } = useContext(ExercisesContext)
    

    const exercises = exercise.map(exercise => 
        <Exercise 
        key={exercise.id}
        {...exercise}
        />)
        
    return(
        <div>
            {exercises}
        </div>
    )
}

export default ExerciseMapped