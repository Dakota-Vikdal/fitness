//import { Signup, Login } from './Auth.js'
import {useState, useEffect} from 'react'

function Home() {

    const [user, setUser] = useState([]);

    useEffect(() => {
        fetch("/check_session").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
      }, []);
      console.log(user)
    if (user) {
        return <h2>Welcome, {user.username}!</h2>;
        } else {
        return <h2>Welcome!</h2>
        }
}

export default Home