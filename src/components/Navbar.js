import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../Pages/Images/logo.jpg";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import navlogo from "../Pages/assets/nav-logo.png";

function navbar() {
  return (
    <Navbar variant="dark" expand="lg" className="sticky-top py-4 bg-blue">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={navlogo}
            height="72px"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5" activeKey={window.location.pathname}>
            <Nav.Link href="/" className="fs-5 ps-3">
              HOME
            </Nav.Link>
            <Nav.Link href="/aboutus" className="fs-5 ps-3">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="/jobs" className="fs-5 ps-3">
              VACANCIES
            </Nav.Link>
          </Nav>

          <Nav className="px-5">
            <div className="social-links d-flex mx-3">
              <a href="https://www.linkedin.com/" className="mx-1 text-light">
                <FaLinkedin size={30} />
              </a>
              <a href="https://www.instagram.com/" className="mx-3 text-light">
                <FaInstagram size={30} />
              </a>
              <a href="https://www.facebook.com/" className="mx-1 text-light">
                <FaFacebook size={30} />
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
