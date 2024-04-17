import React, { useState } from 'react'
import './Signup/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'




const LoginSignupy = () => {
  const [email, setEmail] = useState ('')
  const [password, setPassword] = useState ('')
  const navigate = useNavigate
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await signInWithEmailAndPassword(auth, email, password)
        console.log("You are now logged in")
        navigate('/men');
    }catch(err) {
      console.log(err)
    }
  }
  return (

    
    <div className='signup-container'>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">
          Email:
          <input type="text" onChange={(e) => setEmail (e.target.value)}/>
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" onChange={(e) => setPassword (e.target.value)}/>
        </label>
        <button type='submit'>Login</button> <br />
        <p>Don't have an account? <Link to="/login">Sign Up here</Link></p>
      </form>
    </div>
  )
}

export default LoginSignupy

