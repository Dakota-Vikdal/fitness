import { useEffect, useState } from 'react'
import ExerciseMapped from './ExerciseMapped'
import DropDown from './DropDown'
import NewExercise from './NewExercise'

function ExcerisePage() {

    const [exercise, setExercise] = useState([])
    
    const [exerciseDropDown, setExerciseDropDown] = useState('')

    const myFilter = filteredExercises =>
        filteredExercises.muscles_hit.includes(exerciseDropDown) || exerciseDropDown ==='All'

    const exerciseList = exercise.filter(myFilter)

    const changeExercise = newExercise => {
        setExerciseDropDown(newExercise)
    }


    const updateExercise = freshExerciseObj => {
        setExercise( exercise.map( mObj => {
          if(mObj.id !== freshExerciseObj.id ){
            return mObj
          } else {
            return freshExerciseObj
          }
        } ) )
    
      }



    useEffect(() => {
        fetch('http://localhost:5555/exercises')
            .then(r => r.json())
            .then(setExercise)
    },[])


    const addExercise = (mO) => {
        const exerciseArray = [...exercise, mO]
        fetch('http://localhost:5555/exercises', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(mO)
        })
        .then(response => response.json())
        setExercise(exerciseArray)
      }

    
    return(
        <div>
            <NewExercise addExercise = {addExercise}/>
            <DropDown filterExercise = {changeExercise}/>
            <ExerciseMapped exercise={exerciseList} updateExercise={updateExercise}/>
            
        </div>
    )
}

export default ExcerisePage