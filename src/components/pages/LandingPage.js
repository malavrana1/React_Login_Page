import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import '../../css/LandingPage.css'
import BackgroundImage from '../../assets/images/bg2.png'

export default function LandingPage() {
  return (
    <header
      className="lp-header"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="lp-title-container text-center">
        <h1 className="lp-main-title">login</h1>
        <p className="lp-main-para">Discover My Work</p>
      </div>
      <div className="buttons text-center">
        <Link to="/login">
          <button className="primary-button">log in</button>
        </Link>
        <Link to="/register">
          <button className="primary-button" id="reg_btn">
            <span>register </span>
          </button>
        </Link>
      </div>
    </header>
  )
}
