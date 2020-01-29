import React from 'react'
import SEO from "../components/seo"
import TalkingHeader from '../components/talkingheader'
import ArticleList from '../components/article-list'
import Like from '../components/like'

export default () => (
    <div>
        <SEO title="Portfolio" />
        <TalkingHeader />
        <div class="container">
            <h1>My Portfolio</h1>
            <ArticleList />
        </div>
        <Like />
    </div>
)