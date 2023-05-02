import Exercise from './Exercise'

function ExerciseMapped({exercises, updateExercise}) {
    
    const exercise = exercises.map(exercise => 
        <Exercise 
        key={exercise.id}
        {...exercise}
        updateExercise={updateExercise}
        />)
        
    return(
        <div>
            {exercise}
        </div>
    )
}

export default ExerciseMapped