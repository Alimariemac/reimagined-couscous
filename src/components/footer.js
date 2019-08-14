import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {leftAlign, ExtLink, Bottom, P, FooterImage, StyledLink, H4} from "../style.js"
import { Container, Row, Col} from "reactstrap"


const Footer = ({ siteFooter }) => (
  <Bottom>
  <Container>
    <Row>
      <Col>
        <Row>
        <Col sm={{ size: 9, order: 2}}>
        <P>Stilton cheddar cream cheese. Feta squirty cheese mascarpone st. agur blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.</P>
        </Col>
         <Col sm={{ size: 3, order: 1}}>
         <Row>
         <Col >
         <H4><ExtLink href = "https://dribbble.com/Alimariemac" addCSS = {leftAlign}>Dribbble</ExtLink></H4>
         </Col>
         </Row>
         <Row>
         <Col>
         <H4><ExtLink href = "https://www.linkedin.com/in/aliciamariemaccara/" addCSS = {leftAlign}>LinkedIn</ExtLink></H4>
         </Col>
         </Row>
         <Row>
         <Col>
         <H4><ExtLink href = "https://www.instagram.com/alimariemac/" addCSS = {leftAlign}>Instagram</ExtLink></H4>
         </Col>
         </Row>
         </Col>

        </Row>
      </Col>
    </Row>
</Container>
</Bottom>

)

export default Footer
