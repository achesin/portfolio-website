import React from "react"
import '../styles/global.css'
import {Link } from 'gatsby'

/*
<nav>
			<a href="https://www.instagram.com/amandacphotog/" style={{color: `white`, textDecoration: `none`}}>Instagram</a>
      		<Link to="/contact" style={{color: `white`, textDecoration: `none`}}>Drop a Line</Link>
		</nav>
*/
export default() => (
	<section class="cta">
		<div class="container">
		<img src={require("../images/whatareyouwaitingfor.png")} width="840" height="103" alt="portfolio item"></img>
			<a href="/contact" class="button button-dark">Schedule a sesh!</a>
		</div>
			<div class="col-1">
				<ul class="unstyled-list">
				<a href="/contact" style={{color: `white`, textDecoration: `none`}}>Drop a Line</a>
				</ul>
			</div>
			<div class="col-1">
				<ul class="unstyled-list">
					<a href="https://www.instagram.com/amandacphotog/" style={{color: `white`, textDecoration: `none`}}>Instagram</a>
				</ul>
			</div>
	</section>
)