import React from "react"
import Header from "../components/header.js"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../global-style.js'
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import mainImage from "../images/baugasm2.png"
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const StyledLink = styled(props => <Link {...props} />)`
color:#5926E3
`
const Project = ({node})=>{
  return(
    <li>
    <Link to={node.slug}>{node.title}</Link>
    </li>
  )
}

const ResImage = styled.img`
width: 100%;
height:auto;
`;

const MarginContainer = styled.div`
margin-bottom: 2rem;
`

const IndexPage = ({data}) => (
  <Layout>
  <Header>
  </Header>
  <Container>
        <Row>
          <Col lg="6" className = "mb-5">
          <ResImage src = {mainImage}></ResImage>
          </Col>
          <Col lg="6">
          <Row className = "mb-3">
            <Col>
            <p>Stilton cheddar cream cheese. Feta squirty cheese mascarpone st. agur
            blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop
            blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.
            </p>
            </Col>
          </Row>
          <Row>
          <Col>
          <h3><a href = "#projectSection">Select Projects</a></h3>
          <h3><StyledLink to="digital">Digital Explorations</StyledLink></h3>
          <h3><StyledLink to="analogue">Analogue Explorations</StyledLink></h3>
          </Col>
        </Row>
      </Col>
      </Row>
      <Row className = "mt-5">
        <Col>
          <h2>Projects</h2>
          <ul id="projectSection">
            {data.allContentfulProject.edges.map((edge) => <Project node= {edge.node} />)}
          </ul>
        </Col>
    </Row>
  </Container>
  </Layout>
)

export default IndexPage;
export const pageQuery = graphql`
  query pageQuery {
    allContentfulProject (filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges{
        node {
          title
          slug
        }
      }
    }
  }
`
