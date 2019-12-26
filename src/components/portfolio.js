import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Item from '../components/item'
import '../styles/global.css'

export default() => (
    <StaticQuery 
    
    query = { graphql `query {
        allMarkdownRemark {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  desc
                  featuredImage {
                    childImageSharp {
                      fixed(width: 600, height: 400) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                  }
                  link
                }
              }
            }
          }
        }`

    }
    render = { data => (
        <section class="portfolio">
            <h1>Recent Shoots</h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
                <Item
                desc={node.frontmatter.desc}
                title={node.frontmatter.title}
                image={node.frontmatter.featuredImage.childImageSharp.fixed}
                link={node.frontmatter.link}/>
            ))}
        </section>
    )}
    />
)