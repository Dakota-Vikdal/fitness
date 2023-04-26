import { useState } from 'react'
import NavButton from './NavButton'

export function Signup() {
    const [form, setForm] = useState({})

    const updateForm = (e) => {
        setForm (form => {
            return {
                ...form,
                [e.target.name]: e.target.value
            }
        })
    }
    const createAccount = e => {
        e.preventDefault()
        const body = JSON.stringify(form)
        console.log('ready to post:', body)
    }
    return (
        <div>
            <h1>Welcome!</h1>
            <h3>Sign up below</h3>
            <form onSubmit={createAccount}>
                <div>
                    username: <input onChange= {updateForm} name='username' />
                </div>
                <div>
                    password: <input onChange= {updateForm} name='password' />
                </div>
                <div>
                    confirm: <input onChange= {updateForm} name='confirm' />
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>
            <NavButton/>
        </div>
    )
}

export function Login() {
    return(
        <div>
            <h1>Welcome Back!</h1>
            <h3>Ready to get fit? If so, login below.</h3>
            <form >
                <div>
                    username: <input  name='username' />
                </div>
                <div>
                    password: <input  name='password' />
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>
            <NavButton />
        </div>
    )
}