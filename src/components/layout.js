/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import Header from "./header"
import Footer from "./footer"
import {Body, Container} from "../style.js"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Body>
    <div>
        <Header>
        </Header>
        <Container>
            <main>{children}</main>
          </Container>
        <Footer>
        </Footer>
      </div>
      </Body>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
