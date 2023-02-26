import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register</h1>
      <form >
        <input required type="text" placeholder='Enter the username' />
        <input required type="email" placeholder='Enter the email' />
        <input required type="password" placeholder='Enter the password' />
        <button>Register</button>
        <p>this is an error !</p>
        <span>Have an Account . <Link to="/login">Login</Link></span>
      </form>
    </div>
  )
}

export default Register
