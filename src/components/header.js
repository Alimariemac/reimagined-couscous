import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Marquee = styled.div`
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
`
const MarqueeH1 = styled.h1`
display:inline;
`
const MarqueeSpan  = styled.span`
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
  @keyframes marquee {
    0%   { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
`
const MarqueeSpan2 = styled(MarqueeSpan) `
animation-delay: 5s;
`

const Header = ({ siteTitle }) => (
  <header>
  <Marquee>
    <MarqueeSpan>
      <p>This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text -&nbsp;</p>
    </MarqueeSpan>
    <MarqueeSpan2>
      <p>This is not - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text - This is text -&nbsp;</p>
    </MarqueeSpan2>
  </Marquee>
  </header>
)


export default Header
