import './Exercise.css'
import { useState } from 'react'

function Exercise( { id, description, exercise_name, muscles_hit, image_url, updateExercise, removeExerciseFromState, workouts } ) {
  
    const [showExerciseLists, setShowExerciseLists] = useState(false);
    
    const handleButtonClick = (e) => {
        setShowExerciseLists(e => !e);
      }


    const [ editExercise, setEditExercise ] = useState(false)
    const toggleEdit = () => setEditExercise( e => !e )

    // const [ newImage, setNewImage ] = useState(image_url)
    // const updateImage = e => setNewImage( e.target.value )

    const [ newExercise, setNewExercise ] = useState(image_url)
    const updateExercises = e => setNewExercise( e.target.value )

    const [ newDescription, setNewDescription ] = useState(image_url)
    const updateDescription = e => setNewDescription( e.target.value )

    const [ newMuscle, setNewMuscle ] = useState(image_url)
    const updateMuscle = e => setNewMuscle( e.target.value )

    const commitToNewExercise = e => {
        e.preventDefault()
        fetch( `/exercises/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                exercise_name: newExercise,
                muscles_hit: newMuscle,
                description: newDescription
            } )
        } )
            .then( r => r.json() )
            .then(updateExercise)
    }


    const handleDelete = () => {
        fetch(`http://127.0.0.1:5555/exercises/${id}`, {method: 'DELETE'})
        removeExerciseFromState(id)
    }

    //How else can I write this code in to order to get the workout_name
    // const targetWorkoutName = workouts.map(workout => {              
        // return <li>{workout.workout_name}</li>
    // })
    // console.log(workouts)
    
    // console.log(targetWorkoutName)
    // console.log(exerciseLists)
    // const filteredExerciseLists = targetWorkoutName.filter(workout => workout);
    // console.log(filteredExerciseLists)

    return(
        <div className='card'>
            <div className='card-front'>
                
                {editExercise ? <form onSubmit={commitToNewExercise} className='form'>
                    {/* <input onChange={updateImage} value={newImage} type='image' placeholder='image'/> */}
                    <input onChange={updateExercises} value={newExercise} type='text' placeholder='exercise'/>
                    <input onChange={updateDescription} value={newDescription} type='text' placeholder='description'/>
                    <input onChange={updateMuscle} value={newMuscle} type='text' placeholder='muscle'/>
                    <input type="submit"/>
                </form> :
                <div>

                    

                    {/* <img src={image_url} alt='Not available'/> */}
                    <p>Exercise: {exercise_name}</p>
                    <p>Muscles worked: {muscles_hit}</p>
                    <p>Description: {description}</p> 
                </div>}  
                <button className = 'button' onClick={handleDelete} >🗑️</button>
                <button onClick={toggleEdit}>✏️</button>  
                <button className='button2' onClick={handleButtonClick}>Show Workouts</button>
                {showExerciseLists && (
                    <div>

                        {workouts.map(workout => (
                                <li key={workout.id}>{workout.workout_name}</li>
                            ))}
                        {/* {filteredExerciseLists.map(workout => {              
                            return <li key={workout.id}>{workout.workout_name}</li>
                        })} */}

                       
                    </div>
                )} 
            </div>
                
        </div>
    )
}


 {/* {filteredExerciseLists.map(exerciseList => {              
                            return <li key={exerciseList.workout.id}>{exerciseList.workout.workout_name}</li>
                            })}  */}



// {exerciseLists.map(exercise => {              
//     return <li key={exercise.workout.id}>{exercise.workout.workout_name}</li>
//  })}

export default Exercise