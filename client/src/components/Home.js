import { UserContext } from "../context/User";
import React, { useContext } from "react";


function Home() {

  const { user } = useContext(UserContext)

    if (user) {
        return (
        <div>
          <h2>Welcome, {user.username}!</h2>
        </div>)
        } else {
        return <h2>Welcome!</h2>
        }
}

export default Home