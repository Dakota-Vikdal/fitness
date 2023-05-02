import React, { useState } from "react";


const ExercisesContext = React.createContext();

function ExerciseProvider({ children }) {
  const [exercise, setExercise] = useState([])
    return (
      <ExercisesContext.Provider value={{ exercise, setExercise }}>
        {children}
      </ExercisesContext.Provider>
    );
  }
  
  export { ExercisesContext, ExerciseProvider };