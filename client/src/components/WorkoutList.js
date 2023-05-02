


function WorkoutList( { workout } ) {
    // console.log(workout.workout_name)
    console.log(workout.exerciselists)

    // const elist = workout.map(e => {return e.exerciselists})
    // console.log(elist)

    return(
        <div>
            <h1>{workout.workout_name}</h1>
            {/* <h1>{workout.exercise.exercise_name}</h1> */}
        </div>
    )
}


export default WorkoutList