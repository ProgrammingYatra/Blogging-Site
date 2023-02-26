import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form >
        <input type="text" placeholder='Enter the username' />
        <input type="password" placeholder='Enter the password' />
        <button>Login</button>
        <p>this is an error !</p>
        <span>Don't have account Yet ? <Link to="/register">Register</Link></span>
      </form>
    </div>
  )
}

export default Login
