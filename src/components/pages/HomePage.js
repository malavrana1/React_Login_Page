// HomePage.js
import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/HomePage.css'

const HomePage = () => {
  return (
    <div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/about" className="nav-link about-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link portfolio-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link contact-link">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link logout-link">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default HomePage
