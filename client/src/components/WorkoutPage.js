import { useEffect, useState } from 'react'
import WorkoutMapped from './WorkoutMapped'

function WorkoutPage() {

    const [workout, setWorkout] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5555/workouts`)
            .then(r => r.json())
            .then(setWorkout)
    },[])
    
    
    return(
        <div>
            <WorkoutMapped workout= {workout} />
        </div>
    )
}

export default WorkoutPage