import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {Padded2,Container,leftAlign, ExtLink, Bottom, FooterP, FooterImage, StyledLink, H4, Line} from "../style.js"
import {Row, Col} from "reactstrap"


const Footer = ({ siteFooter }) => (
  <Bottom>
  <Line></Line>
    <Row>
      <Col>
        <Row>
        <Col sm={{ size: 9, order: 2, offset:1}}>
        <FooterP>Stilton cheddar cream cheese. Feta squirty cheese mascarpone st. agur blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.</FooterP>
<Padded2></Padded2>
        </Col>

         <Col sm={{ size: 2, order: 1}}>
         <Row>
         <Col>
         <H4><ExtLink href = "https://dribbble.com/Alimariemac" addCSS = {leftAlign}>Dribbble</ExtLink></H4>
         </Col>
         <Col>
         <H4><ExtLink href = "https://www.linkedin.com/in/aliciamariemaccara/" addCSS = {leftAlign}>LinkedIn</ExtLink></H4>
         </Col>
         <Col>
         <H4><ExtLink href = "https://www.instagram.com/alimariemac/" addCSS = {leftAlign}>Instagram</ExtLink></H4>
         </Col>
         </Row>
         </Col>

        </Row>
      </Col>
    </Row>
</Bottom>

)

export default Footer
