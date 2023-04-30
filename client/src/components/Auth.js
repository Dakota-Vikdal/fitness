import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useFormik} from 'formik'
import * as yup from "yup"

export function Signup( { updateUser } ) {

    const history = useHistory()

    const formSchema = yup.object().shape({
        username: yup.string().required('Please enter a username'),
        email: yup.string().email(),
        password: yup.string().required('Please enter a username')
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
        <div>
            <form onSubmit={formik.handleSubmit}>
                <h2>Signup!</h2>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                    type="text"
                    name="username"
                    id="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    />
                    <p style={{ color: "red" }}> {formik.errors.email}</p>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        autoComplete="current-password" 
                        />
                </div>
                <div>
                    <label htmlFor="email">Email Address</label>
                    <input 
                    type="text"
                    name="email"
                    id="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export function Login( {handleLogin} ) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
      
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
        <div>
            <h1>Welcome Back!</h1>
            <h3>Ready to get fit? If so, login below.</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>
        </div>
    )
}


export function Logout({onLogout}) {
                                     
    function handleLogout() {
        fetch("/logout", {
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
    





