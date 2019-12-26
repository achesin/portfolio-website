import { Link } from "gatsby"
import React from "react"
import '../styles/global.css'

const TalkingHeader = () => (
  <div class="talking">
    <img src={require('../images/lee.jpg')} width="300" height="100" alt="I can lift a car lyrics" class="logo"/>
    <nav class="navi">
      <Link to="/" style={{color: `white`, textDecoration: `none`}}>Home</Link>
      <Link to="/page-2" style={{color: `white`, textDecoration: `none`}}>About</Link>
      <Link to="/404" style={{color: `white`, textDecoration: `none`}}>Portfolio</Link>
      <a href="https://www.instagram.com/amandacphotog/" style={{color: `white`, textDecoration: `none`}}>Instagram</a>
      <Link to="/contact" style={{color: `white`, textDecoration: `none`}}>Contact</Link>
    </nav>
  </div>
)

export default TalkingHeader