import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/global.css'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/">
      <img src={require('../images/amandac-logo.png')} width="300" height="100" alt="Amanda Chesin Photography Logo" className="logo"/>
    </a>
    <nav>
      <Link to="/about" style={{color: `white`, textDecoration: `none`}}>About</Link>
      <Link to="/portfolio" style={{color: `white`, textDecoration: `none`}}>Portfolio</Link>
      <a href="https://www.instagram.com/amandacphotog/" style={{color: `white`, textDecoration: `none`}}>Instagram</a>
      <Link to="/contact" style={{color: `white`, textDecoration: `none`}}>Drop a Line</Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
