import { Link } from "gatsby"
import React from "react"
import '../styles/global.css'

const TalkingHeader = () => (
  <div class="talking">
    <a href="/">
      <img src={require('../images/amandac-logo.png')} width="300" height="100" alt="I can lift a car lyrics" class="logo"/>
    </a>
    <nav class="navi">
      <Link to="/about" style={{color: `white`, textDecoration: `none`}}>About</Link>
      <Link to="/portfolio" style={{color: `white`, textDecoration: `none`}}>Portfolio</Link>
      <a href="https://www.instagram.com/amandacphotog/" style={{color: `white`, textDecoration: `none`}}>Instagram</a>
      <Link to="/contact" style={{color: `white`, textDecoration: `none`}}>Drop A Line</Link>
    </nav>
  </div>
)

export default TalkingHeader