import { useState } from 'react'

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
            <h1>Signup</h1>
            <form onSubmit={createAccount}>
                <div>
                    username: <input onChange= {updateForm} name='username' />
                </div>
                <div>
                    password: <input onChange= {updateForm} name='password' />
                </div>
                <div>
                    confirm password: <input onChange= {updateForm} name='confirm' />
                </div>
                <div>
                    <input type='submit' />
                </div>
            </form>
        </div>
    )
}

export function Login() {
    return(
        <div>
            <h1>Login</h1>
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
        </div>
    )
}