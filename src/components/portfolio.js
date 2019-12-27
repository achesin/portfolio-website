import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import Item from '../components/item'
import '../styles/global.css'

export default() => (
  <div>
    <figure class="port-item">
			<img src={require("../images/arizona.jpg")} width="600" height="400" alt="Lead Singer of AZ"></img>
			<figcaption class="port-desc">
				<p>A R I Z O N A 5.29.19</p>
				<a href="/" class="button button-accent button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/col.jpg")} width="600" height="400" alt="Full band shot"></img>
			<figcaption class="port-desc">
				<p>Colony House 4.3.19</p>
				<a href="/" class="button button-accent button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/mary.jpg")} width="600" height="400" alt="Full band shot"></img>
			<figcaption class="port-desc">
				<p>Mary Antonini</p>
				<a href="/" class="button button-accent button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/mandy.jpg")} width="600" height="400" alt="Mandy Lee of Misterwives"></img>
			<figcaption class="port-desc">
				<p>Misterwives 11.12.19</p>
				<a href="/" class="button button-accent button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/now.jpg")} width="600" height="400" alt="KC Dalager of now, now"></img>
			<figcaption class="port-desc">
				<p>now, now 1.29.19</p>
				<a href="/" class="button button-accent button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/win.jpg")} width="600" height="400" alt="Win onstage"></img>
			<figcaption class="port-desc">
				<p>Win and Woo 3.22.19</p>
				<a href="/" class="button button-accent button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  </div>
    /*<StaticQuery 
    
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
    /> */
)