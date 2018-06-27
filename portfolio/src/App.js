import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.css'

const App = () => (
  <Router>
    <div>
      <nav>
        <span>Michael <a hre="#">&middot;</a>Jac0bs</span><br/>
        <a href="#s">Paint & Ink</a>
        <br/>
        <a href="#s">S0ftware</a>
        {/* <!-- <br> --> */}
        {/* <!-- <a href="#s">Graphix</a> --> */}
        <br/>
        {/* <a href="#s">Vide0</a> */}
        {/* <!-- <br> --> */}
        {/* <!-- <a href="#s">Music</a> --> */}
        {/* <br/> */}
        <a href="about.html">Ab0ut</a>
        <br/>
        {/* <!-- <a href="#s">C0ntact</a> --> */}
      </nav>
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
