// import {useState} from 'react'

// function NewWorkout({addWorkout}) {

//     const [newWorkout, setNewWorkout] = useState('')

//     const workoutNameChange = e => setNewWorkout(e.target.value)

//     const handleSubmit = e => {
//         e.preventDefault()
//         const new_Workout = {
//             workout_name: newWorkout,
//         }
//         addWorkout(new_Workout)
//     }

//     return (
//         <div className='new-workout-form'> 
//             <form onSubmit ={handleSubmit}>
//                 <input onChange= {workoutNameChange} type='text' name='workout_name' placeholder='Name of workout' />
//                 <button type='submit'>Add Workout</button>
//             </form>
//         </div>
//     )
// }

// export default NewWorkout