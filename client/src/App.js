import './stylesheets/App.css';
import { Switch, Route } from 'react-router-dom'
import { Signup, Login, Logout} from './components/Auth.js'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {useEffect, useState} from 'react'
import ExercisePage from './components/ExercisePage'
import WorkoutPage from './components/WorkoutPage'

function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
      fetch("http://localhost:5555/check_session").then((response) => {
          if (response.ok) {
              response.json().then((user) => setUser(user));
          }
      });
  }, []);

  function handleLogin(user) {
      setUser(user);
  }

  function onLogout() {
      setUser(null);
  }

  const updateUser = (user) => setUser(user)


  return (
     <div className="App">
      {/* <ExerciseProvider> */}
       <NavBar />
        <Switch>
            <Route path= '/signup' >
              <Signup updateUser = {updateUser}/>
            </Route>
            <Route path= '/login'>
              <Login handleLogin = {handleLogin}/>
            </Route>
            {/* <Route path= '/logout' > */}
              {/* <Logout onLogout = {onLogout} user={user} setExercise={setExercise}/> */}
            {/* </Route> */}
            <Route path= '/exercisepage' >
              <ExercisePage onLogout={onLogout}/>
            </Route>
            <Route path= '/workoutpage' >
              <WorkoutPage />
            </Route>
            <Route path ='/'>
              <Home user = {user}/>
            </Route>
        </Switch>
      {/* </ExerciseProvider> */}
    </div>
  );
}

export default App;
