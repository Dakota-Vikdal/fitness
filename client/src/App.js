import './stylesheets/App.css';
import { Switch, Route } from 'react-router-dom'
import { Signup, Login} from './components/Auth.js'
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  return (
     <div className="App">
       <header className="App-header">
       {/* <Header /> */}
       <NavBar />
        <Switch>
            <Route path= '/login' component={Login} />
            <Route path= '/Signup' component={Signup} />
            <Route path ='/' component={Home} />
        </Switch>
      </header> 
    </div>
  );
}

export default App;
