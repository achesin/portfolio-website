import React from "react"
import '../styles/global.css'
import Img from "gatsby-image"
//<!--<img src={require(props.image)} width="600" height="400" alt="portfolio item"></img>-->
export default(props) => (
    <figure class="port-item">
			<img src={require("../images/mary.jpg")} width="600" height="400" alt="portfolio item"></img>
			<figcaption class="port-desc">
				<p>{props.title}</p>
				<a href={props.link} class="button button-accent button-small">Full Portfolio</a>
			</figcaption>
	</figure>
)