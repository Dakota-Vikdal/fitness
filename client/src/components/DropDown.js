


function DropDown({filterExercise}) {
    return(
        <select onChange={(e) => {filterExercise(e.target.value)}} id="dropdown">
            <option value="All" >Exercises</option>
            <option value="Biceps">Biceps</option>
            <option value="Triceps">Triceps</option>
            <option value="Forearms">Forearms</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Pectorals">Pectorals</option>
            <option value="Upperback">Upperback</option>
            <option value="Lowerback">Lowerback</option>
            <option value="Neck">Neck</option>
            <option value="Abdomen">Abdomen</option>
            <option value="Glutes">Glutes</option>
            <option value="Quadriceps">Quadriceps</option>
            <option value="Hamstrings">Hamstrings</option>
            <option value="Calves">Calves</option>
        </select>
    )
}

export default DropDown