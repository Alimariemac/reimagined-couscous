import styled, { keyframes } from 'styled-components'
import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"
import { css } from 'styled-components'
import {Col} from 'reactstrap'

var xxs = 370;
var xs = 576;
var s = 768;
var m = 992;
var l = 1400;

export const Body = styled.div`
@import url("https://fonts.googleapis.com/css?family=Lato:300,700,Noto+Serif+SC:900&display=swap");
  background-color: #FFFFFF;
  color:#000000;
`

export const P = styled.p`
font-size: 0.9rem;
font-weight: 300;
margin-bottom:0;
font-family: "Lato", sans-serif;
@media (min-width:${xs}px) {
  font-size: 0.9rem;
}
@media (min-width:${s}px) {
  font-size: 1rem;
}
@media (min-width:${l}px) {
  font-size: 1.2rem;
}
`
export const FooterP = styled.p`
font-size: 0.7rem;
font-weight: 300;
margin-bottom:0;
font-family: "Lato", sans-serif;
@media (min-width:${xs}px) {
  font-size: 0.8rem;
}
@media (min-width:${s}px) {
  font-size: 0.9rem;
}
@media (min-width:${l}px) {
  font-size: 1rem;
}
`

export const IndentP = styled(P)`
margin-left: 15px;
`
export const ListP= styled(IndentP)`
font-size: 0.75rem;
@media (min-width:${xs}px) {
  font-size: 0.8rem;
}
@media (min-width:${m}px) {
  font-size: 0.9rem;
}
`
export const H1 = styled.h1`
font-size: 2.5rem;
font-family: "Noto Serif SC", serif;

@media (min-width:${xs}px) {
  font-size: 2.5rem;
}
@media (min-width:${m}px) {
  font-size: 3.25rem;
}
@media (min-width:${l}px) {
  font-size: 4.5rem;
}
`
export const H2 = styled.h2`
font-size: 1.8rem;
line-height: 2.4rem;
font-family: "Noto Serif SC", serif;
@media (min-width:${xs}px) {
  font-size: 2.2rem;
  line-height: 3rem;
}
@media (min-width:${s}px) {
  font-size: 2.4rem;
  line-height:3.2rem;
}
@media (min-width:${m}px) {
  font-size: 2.6rem;
  line-height: 3.4rem;
}
@media (min-width:${l}px) {
  font-size: 2.8rem;
  line-height: 3.6rem;
}
`
export const H3 = styled.h3`
font-size: 1rem;
font-family: "Lato", sans-serif;
font-weight: 400;
@media (min-width:${xs}px) {
  font-size: 1.1rem;
}
@media (min-width:${s}px) {
  font-size: 1.1rem;
}
@media (min-width:${m}px) {
  font-size: 1.2rem;
}
@media (min-width:${l}px) {
  font-size: 1.25rem;
}
`
export const H4 = styled.h4`
font-size: .9rem;
font-family: "Lato", sans-serif
font-weight: 400;
margin-top: 10px;
@media (min-width:${xs}px) {
  font-size: .9rem;
}
@media (min-width:${s}px) {
  font-size: .9rem;
}
@media (min-width:${m}px) {
  font-size: .9rem;
}
@media (min-width:${l}px) {
  font-size: .9rem;
}
`

export const MainImage = styled.img`
z-index: 1;
height:auto;
width: 100%;
@media (min-width:${s}px) {
  width: 50%;
  padding-right:15px;
}
`

export const FooterImage = styled.img`
width: 100px;
display:none;
@media (min-width:${s}px) {
  display:block;
  width:80%;
  padding-right:15px;
}
`
export const Logo = styled.img`
width: 70px;
@media (min-width:${xs}px) {
  width:75px
}
@media (min-width:${s}px) {
  width:80px;
}
@media (min-width:${m}px) {
  width:85px
}
@media (min-width:${l}px) {
  width:90px
}
`
export const Container = styled.div`
 width:100%;
 padding-right:45px;
 padding-left:45px;
 padding-top:55px;
 padding-bottom:55px;
 margin-right:auto;
 margin-left:auto;
 @media (min-width:${xxs}px) {
   max-width:350px;
 }
@media (min-width:${xs}px) {
  max-width:420px;
}
@media (min-width:${s}px) {
  max-width:600px;
  padding-top:75px;
}
@media (min-width:${m}px) {
  max-width:780px
}
@media (min-width:${l}px) {
  max-width:950px
}
`
export const NumberStyle = styled.div`
position: absolute;
min-height:100px;
top:0;
font-size:1.3rem;
`
export const ProjectBlock = styled.div`
padding-left: 1.4rem;
`

export const RelDiv = styled.div`
position: relative;
padding: 0;
min-height:480px;
@media (min-width:${xxs}px) {
  min-height:500px;
}
@media (min-width:${xs}px) {
min-height:540px;
}
@media (min-width:${s}px) {
min-height:400px;
}
@media (min-width:${m}px) {
  min-height:480px;
}
@media (min-width:${l}px) {
    min-height:600px;
}
`
export const MovingDiv = styled.div`
/*padding-top:200px;*/
@media (min-width:${xxs}px) {
  /*padding-top:210px;*/
}
@media (min-width:${xs}px) {
  /*padding-top:170px;*/
}
@media (min-width:${s}px) {
  /*padding-top:80px;*/
}
@media (min-width:${m}px) {
  /*padding-top:60px;*/
}
@media (min-width:${l}px) {
  /*padding-top:100px;*/
}
`
export const AbsoluteDiv= styled.div`
padding: 0;
position: absolute;
top:140px;
@media (min-width:${xxs}px) {
  top:160px;
}
@media (min-width:${xs}px) {
  top:220px;
}
@media (min-width:${s}px) {
  top:0;
  padding-left: 25%;
  padding-top:0px;
  padding-right:25px;
}
@media (min-width:${m}px) {
  padding-top:10px;
}
`
export const Padded1 = styled.div`
  margin-bottom: 1.3rem;
@media (min-width:${xxs}px) {
  margin-bottom: 1.4rem;
}
@media (min-width:${xs}px) {
  margin-bottom: 1.5rem;
}
@media (min-width:${s}px) {
  margin-bottom: 1.6rem;
}
@media (min-width:${m}px) {
  margin-bottom: 1.7rem;
}
@media (min-width:${l}px) {
  margin-bottom: 1.8rem;
}
`
export const Padded2 = styled.div`
  margin-bottom: 1.8rem;
@media (min-width:${xxs}px) {
  margin-bottom: 2rem;
}
@media (min-width:${xs}px) {
  margin-bottom: 2.2rem;
}
@media (min-width:${s}px) {
  margin-bottom: 3.8rem;
}
@media (min-width:${m}px) {
  margin-bottom: 4.2rem;
}
@media (min-width:${l}px) {
  margin-bottom: 4.5rem;
}
`
export const Top = styled.div`
width:100%;
padding-right:5%;
padding-left:5%;
padding-top:50px;
`

export const Bottom = styled(Container)`
padding-bottom:40px;
padding-top:0px;
`

export const ColorDiv = styled.div`
background-color:#000000;
width:100%;
height:auto;
`

export const HiddenDiv = styled.div`
display:none;
@media (min-width:${s}px) {
  display:block;
}
`
export const MasonryLayout  = styled.div`
  column-count: 1;
  -webkit-column-count: 1;
  column-gap: 0;
  -webkit-column-gap: 0;
  @media (min-width:${xs}px) {
    column-count: 1;
  }
  @media (min-width:${s}px) {
    column-count: 2;
  }
`
export const LayoutPanel  = styled.div`
break-inside: avoid;
-webkit-column-break-inside: avoid;
padding-top: 15px;
padding-right: 0px;
@media (min-width:${s}px) {
  padding-top: 15px;
  padding-right: 15px;
}
`
export const PanelContent  = styled.div`
padding: 0px;
border-radius: 10px;
`

export const leftAlign = css`
   float:left;
`

export const rightAlign = css`
   float:right;
`

export const StyledLink = styled(props => <Link {...props} />)`
  color:black;
  text-decoration: underline;
  font-family: "Lato", sans-serif;
  font-weight:400;
  ${props => props.addcss}
  &:hover {
    color:black;
    text-decoration: none;
    }
`
export const ExtLink = styled.a`
color:black;
font-weight:400;
margin-bottom:10px;
text-decoration: underline;
font-family: "Lato", sans-serif;
${props => props.addcss}
&:hover {
  color:black;
  text-decoration: none;
  }
`
export const Line = styled.hr `
 border-top: 1px solid black;
 padding-bottom:30px
`
;
