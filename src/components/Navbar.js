import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import '../index.css'
function navbar() {
  return (
  <div className='sticky-top bg-dark'>
    <Navbar expand="lg" >
      <Container fluid className='container '>
        <Navbar.Brand href="/" className='text-light' >Estiva Construction</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to="/">
                <Nav.Link className="mx-2" href="/">Home</Nav.Link>
            </Link> */}
            <Link to="/jobs">
              <Nav.Link className="mx-2 text-light " href="/jobs">Vacancies</Nav.Link>
            </Link>
            {/* <NavDropdown title="About Us" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">About Us</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}

            <Link to="/contactus">
              <Nav.Link className="mx-2 text-light" href="contactus">
                Contact Us
              </Nav.Link>
            </Link>

          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success bg-danger">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}

export default navbar;