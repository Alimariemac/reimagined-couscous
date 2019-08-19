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
import css from "../index.css"
import ImportedNotebook from "../p5/P5Component"
import ImportedNotebook2 from "../p5/P5Component2"
import {Body, Container, AbsoluteDiv, RelDiv} from "../style.js"
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
        <RelDiv>
        <ImportedNotebook></ImportedNotebook>
        <ImportedNotebook2></ImportedNotebook2>
        <AbsoluteDiv>
        <Container>
            <main>{children}</main>
</Container>
        <Footer>
        </Footer>
        </AbsoluteDiv>
        </RelDiv>
      </div>
      </Body>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
