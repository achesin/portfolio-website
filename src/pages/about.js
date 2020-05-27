import React from "react"
import SEO from "../components/seo"
import TalkingHeader from "../components/talkingheader"
import Like from "../components/like"

const SecondPage = () => (
  <div class="about-me">
    <SEO title="About" />
    <TalkingHeader />
    &nbsp;
    <div class="container">
    <section class="about">
			<div class="about-textbox">
        <h1>About Me</h1>
        <p>Hey! I'm Amanda, and I'm a photographer based in New York City. Originally from Arizona, I got my start in photography in 2018 at the University of Arizona's student-run radio station, KAMP Radio. I photographed one of my favorite bands, The Aces, and saw the magic of being creative in a concert environment even if I wasn't the one performing on stage. </p>
        <p>More than a year later, I've photographed over 20 shows between Arizona and NYC and have delved into the world of portrait photography with many of Broadway's rising stars.</p>
        <p>My greatest goal is to capture your joy. Let's connect and create something special- send me an email and we'll get started!</p>
	      <p>I'm participating in my first showcase at Melrose Ballroom in NYC on Wednesday, January 29th from 7-11pm with RAW Artists! Looking forward to showing my stuff!</p>
      </div>
    </section>
    </div>
  <Like />
  </div>
)

export default SecondPage
