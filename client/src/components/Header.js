import React from "react";
import './Header.css'
import {Link} from 'react-router-dom'
import {useState} from 'react'

function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (

    <nav className="navbar">
      <Link to='/' className="navbar-logo">Fitness Center</Link>
      <div className="navbar-menu" onClick={handleToggle}>
        <div className={`navbar-hamburger ${isOpen && 'is-active'}`}>
        </div>
      </div>
      <div className={`navbar-links ${isOpen && 'is-active'}`}>
        <Link to='/exercisepage' className="navbar-link">Exercises</Link>
        <Link to='/workoutpage' className="navbar-link">Workouts</Link>
        <Link to='/login' className="navbar-link">Login</Link>
        <Link to='/signup' className="navbar-link">Signup</Link>
      </div>
    </nav>

    // <div id="header">
    //   <h1>Fitness Center</h1>
    //   <Link to='/login' >Login</Link>
    //   <Link to='/signup' className="navbar-link">signup</Link>
    //   <Link to='/exercisepage' className="navbar-link">exercises</Link>
    //   <Link to='/workoutpage' className="navbar-link">workouts</Link>
    //   <Link to='/' className="navbar-logo">Fitness Center</Link>
    // </div>
  );
}

export default Header;