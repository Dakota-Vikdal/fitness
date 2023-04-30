

function Exercise( { description, exercise_name, muscles_hit } ) {

    return(
        <div>
            <p>Description: {description}</p>
            <p>Exercise: {exercise_name}</p>
            <p>Muscles worked: {muscles_hit}</p>
        </div>
    )
}

export default Exercise