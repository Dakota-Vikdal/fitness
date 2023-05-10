import CommentMade from './CommentMade'


function MappedComment( {comment} ) {
    
    const Com = comment.map(commentObj => 
        <CommentMade 
        key = {commentObj.id}
        {...commentObj}
        />
        )

    return(
        <div>
            {Com}
        </div>
    )
}

export default MappedComment