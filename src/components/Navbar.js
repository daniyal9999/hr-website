import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import '../index.css'
import logo from '../Pages/logo.jpg'

function navbar() {
  return (
  <div className='sticky-top bg-blue'>
    <Navbar expand="lg" >
      <Container fluid className='container '>
        <Navbar.Brand href="/" className='text-light'> <b>Home</b> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
           
            <Link to="/jobs">
              <Nav.Link className="mx-2 text-light " href="/jobs"> <b>Vacancies</b> </Nav.Link>
            </Link>

            <Link to="/contactus">
              <Nav.Link className="mx-2 text-light" href="contactus">
                <b>
                Contact Us
                </b>
              </Nav.Link>
            </Link>

            <Link to="/aboutus">
              <Nav.Link className="mx-2 text-light" href="aboutus">
                <b>
                About Us
                </b>
              </Nav.Link>
            </Link>

          </Nav>
          
          <div className='logo'>
            <img src={logo} alt="logo" />
          </div>
          <h3 className='company-name'>Estiva Group</h3>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default navbar;