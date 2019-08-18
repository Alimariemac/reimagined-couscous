import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Img from "gatsby-image"
import Layout from "../components/layout"
import { Link } from "gatsby"
import {Row, Col} from 'reactstrap'
import Header from "../components/header.js"
import {rightAlign, leftAlign, StyledLink, HiddenDiv, LayoutPanel, ProImage, PanelContent, MasonryLayout, IndentP, ListP, P, Padded1, Padded2,Container, MainImage, H1, H2, H3, H4} from "../style.js"
import Fade from "react-reveal/Fade"
var xxs = 420;
var xs = 576;
var s = 768;
var m = 992;
var l = 1400;

class Project extends Component {
  render(){
    const {
      title,
      companyName,
      year,
      extraContent,
      images,
      content,
      deliverables,
      next,
      previous,
    } = this.props.data.contentfulProject
    return (
      <Layout>
      <Padded2>
      <Row>
        <Col>
          <Row>
          <Col md={{ size: 2}}>
          <HiddenDiv>
              <H4>Year</H4>
              <IndentP>{year}</IndentP>
              <H4>Client</H4>
              <IndentP>{companyName}</IndentP>
              <H4>Deliverables</H4>
              {deliverables.map(d => (
                <ListP>
                {d}
                </ListP>
              ))}
            </HiddenDiv>
          </Col>
            <Col md={{ size: 9, offset:1}}>
            <Padded1>
              <H2>{title}</H2>
            </Padded1>
              <P dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}></P>
            </Col>
          </Row>
          </Col>
          </Row>
          </Padded2>
          <Row>
          <Col>
          <Padded2>
          <MasonryLayout>
          <Padded1>
  {images.slice(0,2).map(image => (
    <LayoutPanel>
    <PanelContent>
    <Fade bottom>
    <Img fluid = {image.fluid}></Img>
    </Fade>
    </PanelContent>
    </LayoutPanel>
  ))}
  </Padded1>
  <LayoutPanel>
  <PanelContent>
  <Fade bottom>
  <P>{extraContent}</P>
  </Fade>
  </PanelContent>
  </LayoutPanel>
  {images.slice(2).map(image => (
    <LayoutPanel>
    <PanelContent>
    <Fade bottom>
    <Img fluid = {image.fluid}></Img>
    </Fade>
    </PanelContent>
    </LayoutPanel>
  ))}
  </MasonryLayout>
  </Padded2>
      </Col>
          </Row>
          <Row>
            <Col>
          <H4> <StyledLink to = {previous.slug} addcss = {leftAlign}>Previous</StyledLink></H4>
          <H4><StyledLink to = {next.slug} addcss = {rightAlign}>Next</StyledLink></H4>
            </Col>
          </Row>
      </Layout>
    )
  }
}

Project.propTypes = {
  data: PropTypes.object.isRequired
}

export default Project

export const pageQuery = graphql`
query projectQuery($slug: String!){
  contentfulProject(slug: {eq: $slug}) {
    title
    companyName
    year
    previous {
      slug
    }
    next{
      slug
    }
    deliverables
    extraContent
    images {
      description
        fluid {
          ...GatsbyContentfulFluid
        }
    }
    content {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
