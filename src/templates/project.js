import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Layout from "../components/layout"
import { Link } from "gatsby"
import {Container, Row, Col} from 'reactstrap'
import Img from "gatsby-image"


class Project extends Component {
  render(){
    const {
      title,
      images,
      content
    } = this.props.data.contentfulProject
    return (
      <Layout>
      <Container>
      <Link to="/"><p>&lt;--Home</p></Link>
      <Row>
        <Col>
          <Row>
            <Col md="6">
              <h3>{title}</h3>
            </Col>
          </Row>
          <Row>
              <Col md = "6">
              <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}/>
              </Col>
          </Row>
          <Row>
            <Col>
            {contentfulProject.images.map((images) => <Project node= {.node} />)}
            </Col>
          </Row>
        </Col>
      </Row>
      </Container>
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
    slug
    images {
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
