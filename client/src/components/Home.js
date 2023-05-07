import { UserContext } from "../context/User";
import React, { useContext } from "react";
import './Home.css'


function Home() {

  const { user } = useContext(UserContext)

    if (user) {
        return (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <img />
        </div>)
        } else {
        return (
        <div>
          {/* <div className='img'> */}
            <img src='https://thumbs.dreamstime.com/b/time-fitness-equipment-dark-background-84164532.jpg'/>
          {/* </div> */}
        </div>

        )
          
      
        }
}


export default Home