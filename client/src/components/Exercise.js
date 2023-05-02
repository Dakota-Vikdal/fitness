import './Exercise.css'
import { useState } from 'react'

function Exercise( { id, description, exercise_name, muscles_hit, image_url, updateExercise } ) {

    //Maybe build out the filter via exercises.mucles_hit? 
    //That could be a valid way of attaching the exercises onto specific 
    const [ editExercise, setEditExercise ] = useState(false)
    const toggleEdit = () => setEditExercise( e => !e )

    const [ newImage, setNewImage ] = useState(image_url)
    const updateImage = e => setNewImage( e.target.value )

    const [ newExercise, setNewExercise ] = useState(image_url)
    const updateExercises = e => setNewExercise( e.target.value )

    const [ newDescription, setNewDescription ] = useState(image_url)
    const updateDescription = e => setNewDescription( e.target.value )

    const [ newMuscle, setNewMuscle ] = useState(image_url)
    const updateMuscle = e => setNewMuscle( e.target.value )

    const commitToNewExercise = e => {
        e.preventDefault()
        fetch( `http://127.0.0.1:5555/exercises/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify( {
                image_url: newImage,
                exercise_name: newExercise,
                muscles_hit: newMuscle,
                description: newDescription
            } )
        } )
            .then( r => r.json() )
            .then(updateExercise)
    }



    return(
        <div className='muscles'>
            <button onClick={toggleEdit}>✏️</button>
            {editExercise ? <form onSubmit={commitToNewExercise}>
                <input onChange={updateImage} value={newImage} type='image' placeholder='image'/>
                <input onChange={updateExercises} value={newExercise} type='text' placeholder='exercise'/>
                <input onChange={updateDescription} value={newDescription} type='text' placeholder='description'/>
                <input onChange={updateMuscle} value={newMuscle} type='text' placeholder='muscle'/>
                <input type="submit"/>
            </form> :
            <div>
                <img src={image_url} alt='Not available'/>
                <p>Exercise: {exercise_name}</p>
                <p>Muscles worked: {muscles_hit}</p>
                <p>Description: {description}</p> 
            </div>}
        </div>
    )
}

export default Exercise