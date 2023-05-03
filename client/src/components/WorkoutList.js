


function WorkoutList( { workout } ) {
    console.log(workout)

    // const elist = workout.map(e => {return e.exerciselists})
    // console.log(elist)

    return(
        <div>
            <p>{workout.workout_name}</p>
            <p>{workout.exercises[0].exercise_name}</p>
            <p>{workout.exercises[0].description}</p>
            <p>{workout.exercises[0].muscles_hit}</p>
            <p>{workout.exercises[0].image_url}</p>
        </div>
    )
}


export default WorkoutList