import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'
import '../../css/RegisterPage.css'

export default function SignUpPage() {
  return (
    <div class="register-container m-5-auto">
      <div class="text-center register-form">
        <form action="/home" className="Register-form">
          <h2>Join us</h2>
          <h5>Create your personal account</h5>

          <p class="form-field">
            <label>Username</label>
            <br />
            <input type="text" name="first_name" required />
          </p>
          <p class="form-field">
            <label>Email address</label>
            <br />
            <input type="email" name="email" required />
          </p>
          <p class="form-field">
            <label>Password</label>
            <br />
            <input type="password" name="password" required />
          </p>
          <p class="form-field">
            <button id="sub_btn" class="custom-button" type="submit">
              Register
            </button>
          </p>
          <p>
            <Link to="/">Back to Homepage</Link>.
          </p>
        </form>
      </div>
    </div>
  )
}
