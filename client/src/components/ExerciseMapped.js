import Exercise from './Exercise'

function ExerciseMapped({exercises, updateExercise, removeExerciseFromState}) {
    
    const exercise = exercises.map(exercise => 
        <Exercise 
        key={exercise.id}
        {...exercise}
        updateExercise={updateExercise}
        removeExerciseFromState = {removeExerciseFromState}
        />)
        
    return(
        <div>
            {exercise}
        </div>
    )
}

export default ExerciseMapped