import Exercise from './Exercise'

function ExerciseMapped({exerciseArray}) {
    

    const exercises = exerciseArray.map(exercise => 
        <Exercise 
        key={exercise.id}
        {...exercise}
        />)
        // console.log(exercises)
    return(
        <div>
            {exercises}
        </div>
    )
}

export default ExerciseMapped