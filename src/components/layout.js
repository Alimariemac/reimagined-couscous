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
import { GlobalStyle } from '../global-style'
import styled from 'styled-components'


import Header from "./header"

const H1 = styled.h1`
font-family: 'Noto Sans', sans-serif;
font-size:4.5rem ;
@media (max-width: 400px) {
  font-size: 2rem;
`

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

const Body = styled.div `
@import url("https://fonts.googleapis.com/css?family=Noto+Sans:700|Zilla+Slab&display=swap");
background-color: #FFF8F8;
color:#5926E3;
margin: 0 auto;
padding-bottom: 1.45rem;
padding-top: 2rem;
`

  return (
    <>
    <Body>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Body>
      <GlobalStyle/>
    </>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
