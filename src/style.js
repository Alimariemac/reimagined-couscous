import styled, { keyframes } from 'styled-components'
import Img from "gatsby-image"
import { Link } from "gatsby"
import React from "react"
import { css } from 'styled-components'
import { fadeInUp, slideOutRight } from 'react-animations';

var xxs = 420;
var xs = 576;
var s = 768;
var m = 992;
var l = 1400;

const fadeInAnimation = keyframes`${fadeInUp}`;
const slideOutAnimation = keyframes`${slideOutRight}`;

export const FadeDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

export const Body = styled.div`
@import url("https://fonts.googleapis.com/css?family=Lato:300,400|Prata&display=swap");
  background-color: #FFFFFF;
  color:#000000;
`
export const P = styled.p`
font-size: 1rem;
font-weight: 300;
font-family: "Lato", sans-serif;
@media (min-width:${xs}px) {
  font-size: 1.05rem;
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
export const IndentP = styled.p`
font-size: 1rem;
font-weight: 300;
font-family: "Lato", sans-serif;
margin-left: 15px;
@media (min-width:${xs}px) {
  font-size: 1.05rem;
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
export const ListP= styled(IndentP)`
padding:0px;
margin-bottom:0;
`
export const H1 = styled.h1`
font-size: 1.7rem;
font-family: "Prata", serif;
@media (min-width:${xs}px) {
  font-size: 2rem;
}
@media (min-width:${s}px) {
  font-size: 2.5rem;
}
@media (min-width:${m}px) {
  font-size: 3.25rem;
}
@media (min-width:${l}px) {
  font-size: 4rem;
}
`
export const H2 = styled.h2`
font-size: 1.8rem;
line-height: 2.4rem;
font-family: "Prata", serif;
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
font-family: "Lato", sans-serif
font-weight: 400;
@media (min-width:${xs}px) {
  font-size: 1.05rem;
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
font-size: 1rem;
font-family: "Lato", sans-serif
font-weight: 400;
@media (min-width:${xs}px) {
  font-size: 1rem;
}
@media (min-width:${s}px) {
  font-size: 1rem;
}
@media (min-width:${m}px) {
  font-size: 1rem;
}
@media (min-width:${l}px) {
  font-size: 1rem;
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
width: 50px;
@media (min-width:${xs}px) {
  width:55px
}
@media (min-width:${s}px) {
  width:60px;
}
@media (min-width:${m}px) {
  width:65px
}
@media (min-width:${l}px) {
  width:70px
}
`
export const Container = styled.div`
 width:100%;
 padding-right:45px;
 padding-left:45px;
 padding-bottom: 100px;
 padding-top:50px;
 margin-right:auto;
 margin-left:auto;
 @media (min-width:${xxs}px) {
   max-width:370px;
 }
@media (min-width:${xs}px) {
  max-width:450px;
}
@media (min-width:${s}px) {
  max-width:680px;
}
@media (min-width:${m}px) {
  max-width:800px
}
@media (min-width:${l}px) {
  max-width:980px
}
`
export const NumberStyle = styled.div`
position: absolute;
top:0;
font-size:1.3rem;
`
export const ProjectBlock = styled.div`
padding-left: 1.4rem;
`

export const RelDiv = styled.div`
position: static
padding: 0;
@media (min-width:${s}px) {
position: relative;
width:100%;
}
`
export const AbsoluteDiv= styled.div`

padding: 0;
@media (min-width:${s}px) {
  position: absolute;
  top:0;
  padding-left: 35%;
  padding-right:25px;
}
`
export const Padded1 = styled.div`
margin-bottom: 1.5rem;
`
export const Padded2 = styled.div`
margin-bottom: 3rem;
`
export const Top = styled.div`
width:100%;
padding-right:35px;
padding-left:35px;
padding-top:35px;
`

export const Bottom = styled(Top)`
background-color:Black;
padding-bottom:35px;
${P}{
  color:white;
}
`

export const ColorDiv = styled.div`
background-color:#000000;
width:100%;
height:auto;
`

export const HiddenDiv = styled.div`
display:none;
@media (min-width:${m}px) {
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
   transition: padding-left 0.5s;
   padding-bottom:10px;
   &:hover {
     color:black;
     padding-left: 10px;
     }
`

export const rightAlign = css`
   float:right;
   padding-right: 10px;
   transition: padding-right 0.5s;
   &:hover {
     color:black;
     padding-right: 0px;
     }
`

export const StyledLink = styled(props => <Link {...props} />)`
color:black;
text-decoration:underline;
  ${props => props.addCSS}
  &:hover {
    color:black;
    }
`
export const ExtLink = styled.a`
  color:white;
  display: inline;
  margin-right: 1em;
  text-decoration:underline;
    ${props => props.addCSS}
    &:hover {
      color:white;
      }
`
export const Sketch01 = styled.div`
 float: left;
    margin: 10px 10px 0 0;
    width: 100%;
    ${Sketch01}:canvas{
      width: 100% !important;
      height: auto !important;
 }
`

;
