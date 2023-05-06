import Exercise from './Exercise'

function ExerciseMapped({ exercises, updateExercise, removeExerciseFromState, exerciseLists }) {
    
    const exercise = exercises.map(exercise => 
        <Exercise 
        key={exercise.id}
        {...exercise}
        updateExercise={updateExercise}
        removeExerciseFromState = {removeExerciseFromState}
        exerciseLists={exerciseLists}
        />)

    // const exercises = exercise.map(exercise =>
        
    //     )


    return(
        <div>
            {exercise}
        </div>
    )
}

export default ExerciseMapped