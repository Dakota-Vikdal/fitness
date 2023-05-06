import { NavLink } from "react-router-dom";
// import "./NavBar.css"

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "75px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "pink",
        textDecoration: "none",
        color: "black",
      };

    return (
        <div className="navbar">
            <NavLink
                to="/home"
                exact
                style={linkStyles}
                activeStyle={{
                background: "beige", 
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/signup"
                exact
                style={linkStyles}
                activeStyle={{
                background: "beige",
                }}
            >
                signup
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                background: "beige",
                }}
            >
                login
            </NavLink>
            <NavLink
                to="/exercisepage"
                exact
                style={linkStyles}
                activeStyle={{
                background: "beige",
                }}
            >
                Exercises
            </NavLink>
            <NavLink
                to="/workoutpage"
                exact
                style={linkStyles}
                activeStyle={{
                background: "beige",
                }}
            >
                Workouts
            </NavLink>
            </div>
  );
}

export default NavBar