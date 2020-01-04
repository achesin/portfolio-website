import React from 'react'
import { graphql } from 'gatsby'
import TalkingHeader from '../components/talkingheader'
/*import Footer from '../components/footer' */
import Like from '../components/like'
import '../styles/global.css'

export default ({ data }) => {
   const post = data.markdownRemark

   return (
      <div>
        <TalkingHeader />
         <div class="container">
            <div class="content" dangerouslySetInnerHTML={{ __html: post.html }} />
         </div>
         <Like />
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