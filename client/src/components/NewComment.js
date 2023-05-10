import {useState} from 'react'


function NewComment( {addComment} ) {
    
    const [newComment, setComment ] = useState('')
    const commentChange = e => setComment(e.target.value)

    const handleSubmit = e => {
        e.preventDefault()
        const newComments = {
            comment: newComment,
        }
        addComment(newComments)
        e.target.reset()
    }
    

    return(
        <div>
            <form onSubmit = {handleSubmit}>
                <input onChange= {commentChange} type='text' name='comment' placeholder="Goals you'd like to post?" />
                <button type='submit'>Set Goals</button>
            </form>
        </div>
    )
}

export default NewComment