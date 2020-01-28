import React from "react"

import SEO from "../components/seo"
import Portfolio from '../components/portfolio'
import Hero from '../components/hero'
import About from '../components/about'
import Like from '../components/like'
import Header from '../components/header'

const IndexPage = () => (
  <div>
    <SEO title="Amanda Chesin Photography" />
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Like />
  </div>
)

export default IndexPage
