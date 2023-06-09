import './stylesheets/App.css';
import { Switch, Route } from 'react-router-dom'
import { Signup, Login} from './components/Auth.js'
import Home from './components/Home'
import {useEffect} from 'react'
import ExercisePage from './components/ExercisePage'
import WorkoutPage from './components/WorkoutPage'
import { UserContext } from "./context/User";
import React, { useContext } from "react";
import Header from './components/Header'
import LoginSignup from './components/LoginSignup'


function App() {
  // const [user, setUser] = useState(null);
  const { user,setUser } = useContext(UserContext)
  
  
  useEffect(() => {
      fetch("/check_session").then((response) => {
          if (response.ok) {
              response.json().then((user) => setUser(user));
          } else {
            setUser(null)
          }
      });
  }, [setUser]);

  if (!user) return <LoginSignup /> 
  
  return (
     <div className="App">
      <Header />
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
