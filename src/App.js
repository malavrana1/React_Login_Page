import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import Footer from './components/Footer'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import './App.css'
import Layout from './components/pages/Layout'

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/forget-password" component={ForgetPasswordPage} />
          <Route path="/about">
            <Layout />
            <About />
          </Route>
          <Route path="/portfolio">
            <Layout>
              <Portfolio />
            </Layout>
          </Route>
          <Route path="/contact">
            <Layout>
              <Contact />
            </Layout>
          </Route>
          <Route path="/">
            <Layout>
              <HomePage />
            </Layout>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}
