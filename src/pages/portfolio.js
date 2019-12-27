import React from 'react'
import SEO from "../components/seo"
import TalkingHeader from '../components/talkingheader'
import ArticleList from '../components/article-list'
import Footer from '../components/footer'

export default () => (
    <div>
        <SEO title="Home" />
        <TalkingHeader />
        <div class="container">
            <h1>Portfolio page</h1>
            <ArticleList />
        </div>
        <Footer />
    </div>
)