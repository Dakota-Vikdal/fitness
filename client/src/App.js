import './stylesheets/App.css';
import { Switch, Route } from 'react-router-dom'
import { Signup, Login} from './components/Auth.js'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {useEffect} from 'react'
import ExercisePage from './components/ExercisePage'
import WorkoutPage from './components/WorkoutPage'
import { UserProvider } from "./context/User";
import { UserContext } from "./context/User";
import React, { useContext } from "react";


function App() {
  // const [user, setUser] = useState(null);
  const { setUser } = useContext(UserContext)
  
  useEffect(() => {
      fetch("http://localhost:5555/check_session").then((response) => {
          if (response.ok) {
              response.json().then((user) => setUser(user));
          }
      });
  }, [setUser]);

  
  return (
     <div className="App">
       <NavBar />
        <Switch>
            <Route path= '/signup' >
              <Signup />
            </Route>
            <Route path= '/login'>
              <Login />
            </Route>
            <Route path= '/exercisepage' >
              <ExercisePage />
            </Route>
            <Route path= '/workoutpage' >
              <WorkoutPage />
            </Route>
            <Route path ='/'>
              <Home />
            </Route>
        </Switch>
    </div>
  );
}

export default App;
