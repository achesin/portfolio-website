import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styles/global.css'

const Header = ({ siteTitle }) => (
  <header>
    <a href="/">
      <img src={require('../images/ACP-Logo.png')} width="450" height="150" alt="Amanda Chesin Photography Logo" className="logo"/>
    </a>
    <nav>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <a href="https://www.instagram.com/amandacphotog/">Instagram</a>
      <Link to="/contact">Drop a Line</Link>
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
