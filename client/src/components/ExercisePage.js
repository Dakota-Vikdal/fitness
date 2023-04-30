import { useEffect, useState } from 'react'
import ExerciseMapped from './ExerciseMapped'

function ExcerisePage() {

    const [exercise, setExercise] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5555/exercises')
            .then(r => r.json())
            .then(setExercise)
    },[])

    return(
        <div>
            <ExerciseMapped exerciseArray={exercise}/>
        </div>
    )
}

export default ExcerisePage