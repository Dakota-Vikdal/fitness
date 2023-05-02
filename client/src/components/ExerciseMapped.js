import Exercise from './Exercise'

function ExerciseMapped({exercise, updateExercise}) {
    
    const exercises = exercise.map(exercise => 
        <Exercise 
        key={exercise.id}
        {...exercise}
        updateExercise={updateExercise}
        />)
        
    return(
        <div>
            {exercises}
        </div>
    )
}

export default ExerciseMapped