import React from "react"

import SEO from "../components/seo"
import Portfolio from '../components/portfolio'
import Hero from '../components/hero'
import About from '../components/about'
import Like from '../components/like'
import Footer from '../components/footer'
import Header from '../components/header'

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <Hero />
    <About />
    <Portfolio />
    <Like />
    <Footer />
  </div>
)

export default IndexPage
