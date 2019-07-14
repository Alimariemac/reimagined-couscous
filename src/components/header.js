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
const MarqueeSpan  = styled.span`
  /* margin: 0 auto;
  white-space: nowrap;
  overflow: hidden; */
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

const RelativeDiv = styled.div`
position: relative;
height: 8em;
overflow: hidden;
@media (max-width: 400px) {
  height: 4rem;
}
`

const Header = ({ siteTitle }) => (
  //need to space these out and figure out animation timing
  <header>
  <RelativeDiv>
      <h1 className = "marquee"><span>Welcome Welcome Welcome Welcome Welcome Welcome Welcome -&nbsp;  </span></h1>
      <h1 className = "marquee marquee2"><span className = "MarqueeSpan2">Welcome Welcome Welcome Welcome Welcome Welcome Welcome -&nbsp;</span></h1>
 </RelativeDiv>
 <RelativeDiv>
     <h1 className = "marquee"><span>Welcome Welcome Welcome Welcome Welcome Welcome Welcome -&nbsp;  </span></h1>
     <h1 className = "marquee marquee2"><span className = "MarqueeSpan2">Welcome Welcome Welcome Welcome Welcome Welcome Welcome -&nbsp;</span></h1>
</RelativeDiv>
<RelativeDiv>
    <h1 className = "marquee"><span>Welcome Welcome Welcome Welcome Welcome Welcome Welcome -&nbsp;  </span></h1>
    <h1 className = "marquee marquee2"><span className = "MarqueeSpan2">Welcome Welcome Welcome Welcome Welcome Welcome Welcome -&nbsp;</span></h1>
</RelativeDiv>
  </header>
)

export default Header
