import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/global.css'

const Header = ({ siteTitle }) => (
  <header>
    <img src={require('../images/lee.jpg')} width="300" height="100" alt="I can lift a car lyrics" className="logo"/>
    <nav>
      <Link to="/" style={{color: `white`, textDecoration: `none`}}>Home</Link>
      <Link to="/about" style={{color: `white`, textDecoration: `none`}}>About</Link>
      <Link to="/portfolio" style={{color: `white`, textDecoration: `none`}}>Portfolio</Link>
      <a href="https://www.instagram.com/amandacphotog/" style={{color: `white`, textDecoration: `none`}}>Instagram</a>
      <Link to="/contact" style={{color: `white`, textDecoration: `none`}}>Contact</Link>
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
