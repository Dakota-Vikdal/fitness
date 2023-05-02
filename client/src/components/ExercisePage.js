import { useEffect, useState } from 'react'
import ExerciseMapped from './ExerciseMapped'
import React, { useContext } from "react";
import {ExercisesContext} from '../context/ExerciseContext'
import DropDown from './DropDown'

function ExcerisePage() {

    const [exercise, setExercise] = useState([])
    // const { exercises, setExercise } = useContext(ExercisesContext)
    console.log(exercise)
    
    const [exerciseDropDown, setExerciseDropDown] = useState('')
    console.log(exercise)

    const myFilter = filteredExercises =>
        filteredExercises.muscles_hit.includes(exerciseDropDown) || exerciseDropDown ==='All'

    const exerciseList = exercise.filter(myFilter)

    const changeExercise = newExercise => {
        setExerciseDropDown(newExercise)
    }



    useEffect(() => {
        fetch('http://localhost:5555/exercises')
            .then(r => r.json())
            .then(setExercise)
    },[])
    
    return(
        <div>
            <DropDown filterExercise = {changeExercise}/>
            <ExerciseMapped exercise={exerciseList}/>
        </div>
    )
}

export default ExcerisePage