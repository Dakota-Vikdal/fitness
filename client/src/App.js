import './stylesheets/App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Signup, Login} from './components/Auth.js'

function App() {
  return (
     <div className="App">
       <header className="App-header">
       {/* <Header /> */}
        <Switch>
            <Route path= '/login' component={Login}/>
            <Route path= '/Signup' component={Signup}/>
            {/* <Route path= '/rental' component={Rental}/>
            <Route path= '/movie' component={Movie}/>
            <Route path= '/' component={Home}/> */}
            <Redirect to= '/' />
        </Switch>
      </header> 
    </div>
  );
}

export default App;
