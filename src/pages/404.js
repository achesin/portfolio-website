import React from "react"

import SEO from "../components/seo"
import TalkingHeader from "../components/talkingheader"
import Like from "../components/like"

const NotFoundPage = () => (
  <div class="weird">
    <SEO title="404: Not found" />
    <TalkingHeader />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Like/>
  </div>
)

export default NotFoundPage
