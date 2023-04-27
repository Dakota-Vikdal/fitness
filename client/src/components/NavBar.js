import { NavLink } from "react-router-dom";
// import "./NavBar.css"

function NavBar() {
    const linkStyles = {
        display: "inline-block",
        width: "200px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#2d1606",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div className="navbar">
            <NavLink
                to="/home"
                exact
                style={linkStyles}
                activeStyle={{
                background: "maroon", 
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/signup"
                exact
                style={linkStyles}
                activeStyle={{
                background: "maroon",
                }}
            >
                signup
            </NavLink>
            <NavLink
                to="/login"
                exact
                style={linkStyles}
                activeStyle={{
                background: "maroon",
                }}
            >
                login
            </NavLink>
            <NavLink
                to="/logout"
                exact
                style={linkStyles}
                activeStyle={{
                background: "maroon",
                }}
            >
                logout
            </NavLink>
            </div>
  );
}

export default NavBar