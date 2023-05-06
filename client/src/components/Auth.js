import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from "yup"
import { UserContext } from "../context/User";
import React, { useContext } from "react";
import './Auth.css'

export function Signup() {

    const {setUser} = useContext(UserContext)

    const history = useHistory()

    const updateUser = (user) => setUser(user)


    //maybe an if statement would be a good way of showing that 
    //a username is not uinque

    const formSchema = yup.object().shape({
        username: yup
        .string()
        .required('Please enter username'),
        email: yup
        .string()
        .email('Please enter email'),
        password: yup
        .string()
        .required('Please enter a password')
        .min(6, 'Password must be 6 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[^\w]/, 'Password requires a symbol'),
    })



    const formik = useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
            })
            .then(res => res.json())
            .then(user => {
                updateUser(user)
                history.push('/')
            })
        }

    })


    return (
        <div className='signup'>
            <form onSubmit={formik.handleSubmit}  >
                <h2>Signup!</h2>
                <div className='inner-signup'>
                    <div>
                        <label htmlFor="username">Username </label>
                        <input 
                        type="text"
                        name="username"
                        id="username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="password">Password </label>
                    <input 
                        type="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        autoComplete="current-password" 
                        />
                    <p style={{ color: "fuchsia" }}> {formik.errors.password}</p>
                </div>
                <div>
                    <div>
                        <label htmlFor="email">Email </label>
                        <input 
                        type="text"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <p style={{ color: "fuchsia" }}> {formik.errors.email}</p>
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )

}

export function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext)

    function handleLogin(user) {
        setUser(user);
    }
      
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        // body: JSON.stringify({ username}),
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => handleLogin(user))
                history.push('/')
                console.log('is this working?')
            } else {
                return {'msg': 'incorrect login'}
            }
        });
    }


    return(
        <div className = 'login'>
            <form onSubmit={handleSubmit}>
            <h1>Welcome Back!</h1>
            <h3>Ready to get fit? If so, login below.</h3>
                <div>
                    <div>
                        <label>Username </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                        <label>password </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div>
                        <input type='submit' />
                    </div>
                </div>
            </form>
            
            
        </div>
    )
}


export function Logout( { setExercise } ) {
    const {setUser} = useContext(UserContext)

    function onLogout() {
        setUser(null);
    }
                                     
    function handleLogout() {

        setExercise([])
        /*
        change state to default values
        */


        fetch(`/logout`, {
        method: "DELETE",
        }).then(() => onLogout())
    }
    
    return (
            <header>
                <button onClick={handleLogout}>Logout</button>
            </header>
    );
}

    // history = useHistory()

    // const hanLogout = () => {
    //     fetch('http://127.0.0.1:5555/logout', {
    //     method: 'DELETE'
    //     })
    //     .then(res => {
    //     if(res.ok){
    //         handleLogout(null)
    //         history.push('/')
    //     }
        
    //     })
    // }
    // return(
    //     <div>
    //         <form onSubmit={handleSubmit}>
    //             < onClick={hanLogout}>Logout</>
    //         </form>
    //         <NavButton />
    //     </div>
    // )
    





