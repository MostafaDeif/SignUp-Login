import React from 'react'
import "./SignUp.css"
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className="addUser">
          <h3>Sign Up</h3>
        <form action="" className="addUserForm">
            <div className="inputGroup">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter your name" />

                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" placeholder="Enter your E-mail" />

                <label htmlFor="name">Password:</label>
                <input type="password" id="password" placeholder="Enter your Password" />
                <button  type="submit" className="btn btn-success sign-btn">Sign Up</button>
            </div>
        </form>
        <div className="login">
          <p>Already have an account ?</p>
          <Link to="/login" type="button" className="btn btn-primary login-btn">Login</Link>
        </div>
    </div>
  )
}
