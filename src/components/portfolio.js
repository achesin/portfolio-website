import React from "react"
import '../styles/global.css'

export default() => (
  <div>
    <h1></h1>
    <div class="container">
      <img src={require("../images/justhappened.png")} width="600" height="400" alt="Lead Singer of AZ"></img>
    </div>
    <h1></h1>
    <figure class="port-item">
			<img src={require("../images/zona.jpg")} width="600" height="400" alt="Lead Singer of AZ"></img>
			<figcaption class="port-desc">
				<p>A R I Z O N A 5.29.19</p>
				<a href="/arizona-band/" class="button button-portfolio button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/colony.jpg")} width="600" height="400" alt="Full band shot"></img>
			<figcaption class="port-desc">
				<p>Colony House 4.3.19</p>
				<a href="/colony-house/" class="button button-portfolio button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/mary.jpg")} width="600" height="400" alt="Full band shot"></img>
			<figcaption class="port-desc">
				<p>Mary Antonini</p>
				<a href="/mary-antonini/" class="button button-portfolio button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/mistah.jpg")} width="600" height="400" alt="Mandy Lee of Misterwives"></img>
			<figcaption class="port-desc">
				<p>Misterwives 11.12.19</p>
				<a href="/misterwives/" class="button button-portfolio button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/now.jpg")} width="600" height="400" alt="KC Dalager of now, now"></img>
			<figcaption class="port-desc">
				<p>now, now 1.29.19</p>
				<a href="/nownow/" class="button button-portfolio button-small">Full Portfolio</a>
			</figcaption>
	</figure>
  <figure class="port-item">
			<img src={require("../images/fernell.jpg")} width="600" height="400" alt="Fernell at the court"></img>
			<figcaption class="port-desc">
				<p>Fernell Hogan</p>
				<a href="/fernell-hogan/" class="button button-portfolio button-small">Full Portfolio</a>
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