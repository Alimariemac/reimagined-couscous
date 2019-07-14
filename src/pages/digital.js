import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from 'reactstrap'

const SecondPage = () => (
  <Layout>
  <Container>
    <SEO title="Page two" />  
    <Link to="/">&lt;--Home</Link>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    </Container>
  </Layout>
)

export default SecondPage
