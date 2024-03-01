import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import '../../css/LoginPage.css'

export default function LoginPage() {
  return (
    <div className="login-page text-center m-5-auto">
      <h2>Sign in</h2>
      <form action="/home" className="login-form">
        <p>
          <label>Username</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" required />
          <br />
        </p>
        <p>
          <Link to="/forget-password">
            <label className="right-label">Forget password?</label>
          </Link>
          <br />
        </p>
        <p>
          <button className="login-btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <br />
      <footer>
        <p>
          <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
    </div>
  )
}
