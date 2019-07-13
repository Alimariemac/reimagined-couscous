import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { graphql } from "gatsby";
import Layout from "../components/layout"


class Project extends Component {
  render(){
    const {
      title,
      content
    } = this.props.data.contentfulProject
    return (
      <Layout>
    <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html}}/>
      </div>
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
    content {
      childMarkdownRemark {
        html
      }
    }
  }
}
`
