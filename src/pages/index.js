import React, {Component} from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../components/header.js"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import mainImage from "../images/blob.png"
import styled from "styled-components"
import { Row, Col} from "reactstrap"
import { Link } from "gatsby"
import config from 'react-reveal/globals';
import {MovingDiv, ExtLink,leftAlign, StyledLink, ProjectBlock, NumberStyle, MasonryLayout, LayoutPanel, PanelContent, ColorDiv, PlaceholderDiv2, PlaceholderDiv, P, Padded1, Padded2, Container, MainImage, H1, H2, H3, H4, RelDiv, AbsoluteDiv} from "../style.js"
import Fade from "react-reveal/Fade"
import Helmet from "react-helmet"
import ImportedNotebook from "../p5/P5Component"

const Project = ({node})=>{
  return(
    <Col md="4" className = "mb-3">
    <Fade ssrFadeout bottom>
           <NumberStyle><H3>{node.order}.</H3></NumberStyle>
           <ProjectBlock>
              <H3>{node.title}</H3>
              <P>{node.companyName}</P>
              <H4><StyledLink to={node.slug} addCSS = {leftAlign}>see more</StyledLink></H4>
            </ProjectBlock>
            <Padded2></Padded2>
            </Fade>
    </Col>

  )
}

const IndexPage = ({data}) => (
  <Layout>
<Helmet>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.9.0/p5.js"></script>
</Helmet>
        <RelDiv>
        <Row>
        <Col>
        <ImportedNotebook style = {{width:"100%"}}></ImportedNotebook>
              <AbsoluteDiv>
                  <H1>Hello.
                  <br></br>Bonjour.
                  <br></br>
                  こんにちわ.</H1>
                  <Padded1></Padded1>
                  <P>I'm Alicia! I design (at Foursquare), make stamps (out of rubber) and code things (in lots of languages!). I built this site using Gatsby, Contentful and Netlify and made my morphing shape in P5.js. You can play around with it <ExtLink href = "https://editor.p5js.org/Alimariemac/present/3BhtINLch">here</ExtLink> and create your own!</P>

              </AbsoluteDiv>
              </Col>
              </Row>
          </RelDiv>

          <MovingDiv>
          <Row>
    <Col>
      <Row id = "projectSection">
          {data.allContentfulProject.edges.map((edge) => <Project node= {edge.node} />)}
        </Row>
        </Col>
  </Row>
  </MovingDiv>
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
          year
          companyName
        }
      }
    }
  }
`
