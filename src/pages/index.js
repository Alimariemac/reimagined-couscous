import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/header.js"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import mainImage from "../images/baugasm3.png"
import styled from "styled-components"
import { Row, Col} from "reactstrap"
import { Link } from "gatsby"
import {leftAlign, StyledLink, ProjectBlock, NumberStyle, MasonryLayout, LayoutPanel, PanelContent, ColorDiv, PlaceholderDiv2, PlaceholderDiv, P, Padded1, Padded2, Container, MainImage, H1, H2, H3, H4, RelDiv, AbsoluteDiv} from "../style.js"
import Fade from "react-reveal/Fade"

const Project = ({node})=>{
  return(
    <Col md="4" className = "mb-3">
           <NumberStyle><H3>{node.order}.</H3></NumberStyle>
           <ProjectBlock>
              <H3>{node.title}</H3>
              <P>{node.companyName}<br/><StyledLink to={node.slug} addCSS = {leftAlign}>see more</StyledLink></P>
            </ProjectBlock>
    </Col>
  )
}

const IndexPage = ({data}) => (
  <Layout>
      <Container>
        <RelDiv>
        <Row>
        <Col>
         <Padded2>
            <MainImage src = {mainImage}></MainImage>
            </Padded2>
              <AbsoluteDiv>
              <Padded1>
                  <H1>Hello. Bonjour.
                  <br></br>
                  こんにちわ.</H1>
                  </Padded1>
                  <Padded2>
                  <P>Stilton cheddar cream cheese. Feta squirty cheese mascarpone st. agur blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.</P>
                  </Padded2>
              </AbsoluteDiv>
              </Col>
              </Row>
          </RelDiv>
          <Row>
              <Col>
              <Padded1>
                  <H2>
                  Projects.
                  </H2>
              </Padded1>
              </Col>
          </Row>
          <Row>
    <Col>
      <Row id = "projectSection">
          {data.allContentfulProject.edges.map((edge) => <Project node= {edge.node} />)}
        </Row>
        </Col>
  </Row>
      </Container>
  </Layout>
)
//{data.allContentfulProject.edges.reverse().map((edge) => <Project node= {edge.node} />)}
export default IndexPage;
export const pageQuery = graphql`
  query pageQuery {
    allContentfulProject (sort: {order: ASC, fields: order},filter: {
      node_locale: {eq: "en-US"}
    }) {
      edges{
        node {
          title
          slug
          order
          companyName
          image{
            description
              fluid {
                ...GatsbyContentfulFluid
              }
          }
        }
      }
    }
  }
`
