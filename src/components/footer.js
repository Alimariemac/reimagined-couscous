import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {ExtLink, Bottom, P, FooterImage, StyledLink, H4} from "../style.js"
import shapeImage from "../images/Shape.png"
import { Container, Row, Col} from "reactstrap"


const Footer = ({ siteFooter }) => (
  <Bottom>
  <Container>
    <Row>
      <Col>
        <Row>
         <Col md = "3">
         <Row>
         <Col>
         <H4><ExtLink href = "https://dribbble.com/Alimariemac">Dribbble</ExtLink></H4>
         </Col>
         </Row>
         <Row>
         <Col>
         <H4><ExtLink href = "https://www.linkedin.com/in/aliciamariemaccara/">LinkedIn</ExtLink></H4>
         </Col>
         </Row>
         <Row>
         <Col>
         <H4><ExtLink href = "https://www.instagram.com/alimariemac/">Instagram</ExtLink></H4>
         </Col>
         </Row>
         </Col>
         <Col>
         <P>Stilton cheddar cream cheese. Feta squirty cheese mascarpone st. agur blue cheese who moved my cheese everyone loves cow dolcelatte. Stinking bishop blue castello parmesan port-salut edam rubber cheese airedale stinking bishop.</P>
         </Col>
        </Row>
      </Col>
    </Row>
</Container>
</Bottom>

)

export default Footer
