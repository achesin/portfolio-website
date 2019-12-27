import React from 'react'
import { graphql } from 'gatsby'
import TalkingHeader from '../components/talkingheader'
import Footer from '../components/footer'
import '../styles/global.css'

export default ({ data }) => {
   const post = data.markdownRemark

   return (
      <div>
        <TalkingHeader />
         <div class="container-post">
            <div style={{ width: '100%', height: '200px', backgroundColor: '#fafafa', backgroundImage: 'Url(https://source.unsplash.com/960x200/?' + post.frontmatter.keywords + ')', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', marginBottom: '30px' }}></div>
            <div class="content" dangerouslySetInnerHTML={{ __html: post.html }} />
         </div>
         <Footer />
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