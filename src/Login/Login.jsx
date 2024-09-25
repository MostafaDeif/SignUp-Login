import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="addUser">
      <h3>Login</h3>
      <form action="" className="addUserForm">
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" placeholder="Enter your E-mail" />

          <label htmlFor="name">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
      <div className="login">
        <p>Don't have an Account ?</p>
        <Link to="/" type="button" className="btn btn-success login-btn">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
