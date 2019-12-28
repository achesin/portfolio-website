import React from "react"
import SEO from "../components/seo"
import TalkingHeader from "../components/talkingheader"
import Footer from "../components/footer"

const SecondPage = () => (
  <div class="about-me">
    <SEO title="Page two" />
    <TalkingHeader />
    &nbsp;
    <div class="container">
    <section class="about">
			<div class="about-textbox">
        <h1>About Me</h1>
        <p>Hey! I'm Amanda, and I'm a photographer based in New York City. Originally from Arizona, I got my start in photography in 2018 at the University of Arizona's student-run radio station, KAMP Radio. I photographed one of my favorite bands, The Aces, and saw the magic of being creative in a concert environment even if I wasn't the one performing on stage. </p>
        <p>More than a year later, I've photographed over 20 shows between Arizona and NYC and have delved into the world of portrait photography with many of Broadway's rising stars</p>
        <p>Let's shoot together! Fill out the contact form or message me on Instagram and let's set something up!</p>
      </div>
      <img src={require('../images/amandaAbout.jpg')} class="self-portrait" alt="Amanda in Utah"></img>
    </section>
    </div>
  <Footer/>
  </div>
)

export default SecondPage
