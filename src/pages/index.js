import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

const Project = ({node})=>{
  return(
    <li>
    <Link to={node.slug}>{node.title}</Link>
    <img src = {node.featureImage.resize.src}/>
    <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}
const IndexPage = ({data}) => (
  // <Layout>
  //   <SEO title="Home" />
  //
  // </Layout>
  <ul>
    {data.allContentfulProject.edges.map((edge) => <Project node= {edge.node} />)}
  </ul>
)

export default IndexPage

export const pageQuery = graphql`
  query pageQuery {
    allContentfulProject (filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges{
        node {
          title
          slug
          content{
            childMarkdownRemark {
              excerpt(pruneLength:30)
            }
            }

            featureImage{
              resize(width:300, height:300){
                src
              }
          }
        }
      }
    }
  }
`
