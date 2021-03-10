import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import "./Login.css";







export default function Login() {

    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = (e)=> {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth)=> {
            history.push('/')
        })
        .catch((e)=> alert(e.message))
        
    }

    const register = (e)=> {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, password)
        .then(()=>{
            history.push('/')
        })
        .catch((e)=> alert(e.message))
    } 



    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />

            </Link>


            <div className="login__container">
                <h1>Singn in</h1>
                <form>
                
                <h5>email</h5>
                <input value={email} onChange={e => setEmail(e.target.value)} type="text" />
                <h5>password</h5>
                <input name="password" onChange={e =>setPassword(e.target.value)} type="password" />
                <button  onClick={login} className="login__singInButton">Sign In</button>
                </form>
                <p>Lorem ipsum dolor sit a. Eveniet natus, aperiam architecto ab dicta animi ratione voluptas fugiat? Impedit maiores ipsam minus distinctio obcaecati soluta labore porro exercitationem adipisci aliquid.
                </p>
                <button onClick={register} className="login__singInRegister">Create Your Amazon Acount</button>
            </div>
        </div>
    )
}
