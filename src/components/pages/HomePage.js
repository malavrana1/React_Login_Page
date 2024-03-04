import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/HomePage.css'

export default function HomePage() {
  return (
    <div className="app-container">
      <h1 className="app-title">Explore My Work</h1>
      <Link to="/">
        <button className="logout-btn">Log Out</button>
      </Link>
    </div>
  )
}
