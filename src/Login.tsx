import React, { useState, useEffect } from 'react'
import { AuthTitile, AuthForm, AuthFormBtn, AuthFormField } from './Auth.components'
import axios from 'axios'

interface IAuthData {
    clientId?: number | null,
    email: string,
    password: string
}

interface IUser {
    id: number | null,
    email: string,
    name: string
}

const userState: IUser = {
    id: null,
    email: '',
    name: ''
}

const authState: IAuthData = {
    clientId: 1,
    email: '',
    password: ''
}


const Login = () => {

    const [state, setState] = useState(authState)
    const [user, setUser] = useState(userState)
    const [isAuth, setAuth] = useState<boolean>(false)

    useEffect(() => {

        const fethcedData = async () => {
            const config = {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            }

            axios.get('https://tager.dev.ozitag.com/api/tager/user/profile', config)
                .then(res => {
                    setUser(res.data.data)
                    console.log(res)
                })
                .catch(err => console.log(err))
        }

        isAuth && fethcedData()

    }, [isAuth])

    const onLogin = async (formData: IAuthData) => {
        const { data: { data } } = await axios.post('https://tager.dev.ozitag.com/api/auth/user', formData);
        localStorage.setItem('token', data.accessToken)
        setAuth(true)
    }

    const onLogout = () => {
        localStorage.clear()
        setUser(userState)
        setAuth(false)
    }

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onLogin(state)
    }


    return (isAuth ? <div>
            <h1>Hello {user.name}</h1>
            <button onClick={onLogout}>Logout</button>
        </div> :
        <div>
            <AuthTitile>Login</AuthTitile>
            <AuthForm onSubmit={onSubmit}>
                <AuthFormField type='email' placeholder='Enter your email' onChange={(e) => setState({ ...state, email: e.target.value })} />
                <AuthFormField type='password' placeholder='Enter your password' onChange={(e) => setState({ ...state, password: e.target.value })} />
                <AuthFormBtn type='submit'>Submit</AuthFormBtn>
            </AuthForm>
        </div>
    )
}

export default Login
