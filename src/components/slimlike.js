import React from "react"
import '../styles/global.css'

export default() => (
	<section class="cta">
			<div class="col-3">
				<a href='#'>
					<img src={require("../images/ACP-Watermark.png")} width="250" height="150" alt="portfolio item" class="bottom-logo"></img>
				</a>
			</div>
			<div class="col-1">
				<ul class="unstyled-list">
				<a href="/contact">Drop a Line</a>
				</ul>
			</div>
			<div class="col-1">
				<ul class="unstyled-list">
					<a href="https://www.instagram.com/amandacphotog/">Instagram</a>
				</ul>
			</div>
	</section>
)