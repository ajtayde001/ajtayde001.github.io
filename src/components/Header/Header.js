import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import '../../pages/style.css';


function Header() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <div id="nav-menu">
    <Navbar expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}>


      <Navbar.Brand className='logotext' as={Link} to='/'>
        <div className='logo'></div>
      </Navbar.Brand>

      <Navbar.Toggle className='navbar-toggler' aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : "expanded");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar'>

        <Nav className="ms-auto" defaultActiveKey="#home" id= "nav-menu">


          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)} className= "nav-link home"> Home </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link 
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
              className= "nav-link about"
            >
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/skills"
              onClick={() => updateExpanded(false)}
              className= "nav-link skills"
            >
              Skills
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
              className= "nav-link projects"
            >
              Projects
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/contact"
              onClick={() => updateExpanded(false)}
              className= "nav-link contact"
            >
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Link  class= "nav-link resume" href={require('../../Assets/AjayTayde.pdf')} download='AjayTayde.pdf'>
            <Button 
          id="resume-link-1"
           className='resumebtn'><span>Resume</span>
          </Button>
          {/* </a> */}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

    </Navbar>
    </div>
  );
}

export default Header;