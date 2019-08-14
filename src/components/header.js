import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Slogo from "../images/Logo.svg"
import {Top, Logo} from "../style.js"


const Header = ({ siteTitle }) => (
  <Top>
  <Link to = "/"> <Logo src = {Slogo} alt = "Site Logo"/></Link>
   </Top>
)

export default Header
