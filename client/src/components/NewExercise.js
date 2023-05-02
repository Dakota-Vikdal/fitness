import {useState} from 'react'

function NewExercise({addExercise}) {

    const [newName, setName ] = useState('')
    const [newDescription, setDescription] = useState('')
    const [newMuscle, setMuscle] = useState('')

    const nameChange = e => setName(e.target.value)
    const descriptionChange = e => setDescription(e.target.value)
    const muscleChange = e => setMuscle(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const newExercise = {
            exercise_name: newName,
            muscles_hit: newMuscle,
            description: newDescription
        }
        addExercise(newExercise)
    }

    return (
        <div className='new-movie-form'> 
            <form onSubmit ={handleSubmit}>
                <input onChange= {nameChange} type='text' name='exercise_name' placeholder='Name of exercise' />
                <input onChange= {descriptionChange} type='text' name='description' step='0.01' placeholder='Description of exercise' />
                <input onChange= {muscleChange} type='text' name='muscles_hit' placeholder='Muscle group/s' />
                <button type='submit'>Add Exercise</button>
            </form>
        </div>
    )
}

export default NewExercise