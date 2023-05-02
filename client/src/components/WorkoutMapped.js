import WorkoutList from './WorkoutList'


function WorkoutMapped({workout}){

    
    const workouts = workout.map((workoutObj) =>
    <WorkoutList
    key = {workoutObj.id}
    workout= {workoutObj}
    /> )
    
    
    return(
        <div>
            {workouts}
        </div>
    )
}



export default WorkoutMapped