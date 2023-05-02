import './Exercise.css'

function Exercise( { description, exercise_name, muscles_hit, image_url } ) {

    console.log(image_url)
    //Maybe build out the filter via exercises.mucles_hit? 
    //That could be a valid way of attaching the exercises onto specific 

    return(
        <div className='muscles'>
            <img src={image_url} alt='Image unavailable'/>
            <p>Exercise: {exercise_name}</p>
            <p>Muscles worked: {muscles_hit}</p>
            <p>Description: {description}</p>
        </div>
    )
}

export default Exercise