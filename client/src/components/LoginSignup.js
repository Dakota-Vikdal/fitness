import React, {useState} from "react";
import {Login, Signup} from './Auth';
import './LoginSignup.css'


function LoginSignup() {

    const [showLogin, setShowLogin] = useState(true)

    return (
        <div>
            {showLogin ? (
                <>
                    <Login />
                    <p className='log-in'>
                        Don't have an account?
                    <button 
                        onClick ={() => setShowLogin(false)} 
                        type='submit'>
                        Signup
                    </button>
                    </p>
                </>
            ): (
                <>
                    <Signup />
                    <p className='sign-up'>
                        Already have an account?
                        <button 
                            onClick= {() => setShowLogin(true)} 
                            type='submit'>
                            Login
                        </button>
                    </p>
                </>
            )}
        </div>
    )

}

export default LoginSignup