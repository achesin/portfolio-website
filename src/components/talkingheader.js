import { Link } from "gatsby"
import React from "react"
import '../styles/global.css'

const TalkingHeader = () => (
  <div class="talking">
    <a href="/">
      <img src={require('../images/ACP-Logo.png')} width="300" height="100" alt="I can lift a car lyrics" class="logo"/>
    </a>
    <nav class="navi">
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <a href="https://www.instagram.com/amandacphotog/">Instagram</a>
      <Link to="/contact">Drop A Line</Link>
    </nav>
  </div>
)

export default TalkingHeader