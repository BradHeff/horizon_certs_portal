import React from 'react';
import './header.css';
import {Navbar, Nav, Dropdown} from 'react-bootstrap';

import logo from '../../assets/images/logo11.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as Scroll from "react-scroll";
const Links = Scroll.Link;

const Header = (props) => {
  return (
      
    <Navbar collapseOnSelect expand="lg" className="titlebar" variant="dark" sticky="top">
      <Navbar.Brand href="#home"><img src={logo} alt={logo} height={40} /></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Links
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Home</Links>
          <Links
          to="buttons"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Downloads</Links>

        <Links
          to="s2"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 2</Links>
        <Links
          to="s3"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 3</Links>
        {props.os === 0 ?
        <Links
          to="s4"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 4</Links>
        :null}
        {props.os === 0 ?
        <Links
          to="s5"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 5</Links>
        :null}
        {props.os === 0 ?
        <Links
          to="s6"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Step 6</Links>
        
        :null}
        <Links
          to="finish"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="nav-link"
        >Finish</Links>      
        </Nav>
        <Nav>
          <Dropdown drop="left" id="dropdown-menu-align-responsive-1">
            <Dropdown.Toggle id="dropdown-basic" style={{background: 'none', boxShadow: 'none', border: 'none'}}>
              <FontAwesomeIcon icon="user" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="https://horizon-sa.instructure.com/login" target="_blank">Canvas</Dropdown.Item>
              <Dropdown.Item href="https://outlook.live.com/owa/" target="_blank">Outlook</Dropdown.Item>
              <Dropdown.Divider />              
              <Dropdown.Item href="mailto:support@horizon.sa.edu.au?subject=Application | Problem with installing certificate&body=Hi Brad, can i get some help in room ?? installing family zones certificate please.">Request Support</Dropdown.Item>
              
            </Dropdown.Menu>
          </Dropdown>
          {/* <a href="mailto:support@horizon.sa.edu.au?subject=Application | Problem with installing certificate&body=Hi Brad, can i get some help in room ?? installing family zones certificate please." className="btn btn-outline-light">Request Support</a> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;