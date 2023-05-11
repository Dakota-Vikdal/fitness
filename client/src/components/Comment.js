import { useEffect, useState } from "react"
import './Comment.css'
import NewComment from './NewComment'
import MappedComment from './MappedComment'


function Comment() {

    const [comment, setComment] = useState([])
    
    useEffect(() => {
        fetch('/comments')
        .then(r => {
            if(r.ok){
                r.json().then(comment => setComment(comment))
            } else {
                console.log('uh-oh, something went wrong.')
            }
        })
    },[])

    const addComment = (commentObj) => {
        const commentArray = [...comment, commentObj]
        fetch('/comments', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(commentObj)
        })
        .then(response => response.json())
        setComment(commentArray)
      }


    const removeCommentFromState = goodbyeComment => {
    const filteredArray = comment.filter(goodbyeCommentObj => {
        return goodbyeCommentObj.id !== goodbyeComment
    })
    setComment(filteredArray)
    }

    // const handleDelete = () => {
    //     fetch(`/comments/${id}`, {method: 'DELETE'})
    //     removeCommentFromState(id)
    // }


    return (
        <div className='comments'>
            <NewComment addComment= {addComment} />
            <MappedComment comment = {comment} removeCommentFromState = {removeCommentFromState}/>
            {/* {comment.map(cObj => {
                return (
                <div>
                    <li>{cObj.comment}</li>
                </div>
                )
            })} */}
            {/* <button onClick={handleDelete}>delete me!</button> */}
        </div>
    )
}

export default Comment
