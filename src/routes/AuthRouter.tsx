import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const AuthRouter = () => {
  return (
    <Router>
        <Route path="/login"/>
        <Route path="/register"/>
    </Router>
  )
}

export default AuthRouter