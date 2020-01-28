import React from 'react'
import { graphql } from 'gatsby'
import TalkingHeader from '../components/talkingheader'
/*import Footer from '../components/footer' */
import SlimLike from '../components/slimlike'
import '../styles/global.css'

export default ({ data }) => {
   const post = data.markdownRemark

   return (
      <div>
        <TalkingHeader />
         <div class="container">
            <div class="content" dangerouslySetInnerHTML={{ __html: post.html }} />
         </div>
         <SlimLike />
      </div>
   )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        keywords
      }
    }
  }
`