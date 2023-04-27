import './stylesheets/App.css';
import { Switch, Route } from 'react-router-dom'
import { Signup, Login} from './components/Auth.js'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {useEffect, useState} from 'react'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
      fetch("/check_session").then((response) => {
          if (response.ok) {
              response.json().then((user) => setUser(user));
          }
      });
  }, []);

  function handleLogin(user) {
      setUser(user);
  }

  function handleLogout() {
      setUser(null);
  }

  function handleUpdate(user) {
      setUser(user)
  }



  return (
     <div className="App">
       <header className="App-header">
       <NavBar />
        <Switch>
            <Route path= '/login'>
              <Login handleLogin = {handleLogin}/>
            </Route>
            <Route path= '/signup' >
              <Signup />
            </Route>
            <Route path ='/'>
              <Home />
            </Route>
        </Switch>
      </header> 
    </div>
  );
}

export default App;
