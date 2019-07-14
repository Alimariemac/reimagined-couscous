import React from "react"
import Header from "../components/header.js"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import mainImage from "../images/baugasm2.png"
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'

const StyledLink = styled(props => <Link {...props} />)`
text-decoration: underline;
`
const ProjectPara = styled.p`
font-size: 1.3rem ;
`
const LinkHeading = styled.h4`
line-height: 2rem;
`
const NumberStyle = styled.div`
position: absolute;
top:0;
font-size:1.3rem;
`
const ProjectBlock = styled.div`
padding-left: 1.4rem;
`
const ResImage = styled.img`
margin-top: 10px;
width: 100%;
height:auto;
`;

const MarginContainer = styled.div`
margin-bottom: 2rem;
`

const Project = ({node})=>{
  return(
    <Col md="4" className = "mb-3">
           <NumberStyle><h4>{node.order}. </h4></NumberStyle>
           <ProjectBlock>
              <h4>{node.title}</h4>
              <p>{node.companyName} <br/> <StyledLink to={node.slug}>see more</StyledLink></p>
            </ProjectBlock>
    </Col>
  )
}


const IndexPage = ({data}) => (
  <Layout>
  <Header>
  </Header>
  <Container>
        <Row className= "mt-3">
          <Col lg="6" className = "mb-3">
          <ResImage src = {mainImage}></ResImage>
          </Col>
          <Col lg="6">
          <Row>
            <Col>
            <p>Stilton cheddar cream cheese. Feta squirty cheese mascarpone st. agur
            blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop
            blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.
            </p>
            </Col>
          </Row>
          <Row>
          <Col>
          <LinkHeading><StyledLink to = "#projectSection">Select Projects</StyledLink></LinkHeading>
          <LinkHeading><StyledLink to="digital">Digital Explorations</StyledLink></LinkHeading>
          <LinkHeading><StyledLink to="analogue">Analogue Explorations</StyledLink></LinkHeading>
          </Col>
        </Row>
      </Col>
      </Row>
      <Row className = "mt-5">
      <Col>
        <Row className = "mb-3">
            <Col>
              <h2>Projects</h2>
            </Col>
          </Row>
        <Row id = "projectSection">
            {data.allContentfulProject.edges.map((edge) => <Project node= {edge.node} />)}
          </Row>
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
          order
          companyName
        }
      }
    }
  }
`
