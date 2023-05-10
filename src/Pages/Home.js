import React from "react";
import { Link } from "react-router-dom";
import ThreeItemCarousel from "../components/Carousel";
import Clients from "../components/Clients";
import { FaFacebook, FaInstagram, FaLinkedin, FaSearch } from "react-icons/fa";

import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";
import "../index.css";
import mainlogo from "./assets/main-logo.png";
import footerlogo from "./assets/footer-logo.png";
import bg1 from "./assets/bg-1.png";
import f1 from "./assets/f-1 (1).jpg";
import f2 from "./assets/f-1 (2).jpg";
import f3 from "./assets/f-1 (3).jpg";
import zoho from "./assets/zoho.png";

const Home = () => {
  const date = new Date().getFullYear();
  return (
    <>
      {/* Home Page */}
      {/* <section classNameName="bg-img">
        <header classNameName="text-light py-5">
          <Container>
            <Row>
              <Col md={12}>
                <div classNameName="text-center mx-auto my-5">
                  <Link to="/jobs">
                    <Button
                      variant="lg text-white btn-primary rounded-pill"
                      classNameName="button-margin"
                    >
                      Find Jobs
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </header>
      </section> */}
      {/* <Clients />
      <ThreeItemCarousel /> */}

      {/* HERO SECTION */}
      <section>
        <div className="main">
          <img className="bg-img" src={bg1} alt="" />
        </div>
        <div className="main-logo">
          <img src={mainlogo} alt="logo" />
          <p>
            Estiva is your construction and
            <br />
            engineering recruitment specialitst.
            <br />
            We are technical recruitment agency,
            <br />
            focused on helping firms secure
            <br />
            the best available talent.
          </p>
        </div>
      </section>

      {/* SEARCH SECTION */}
      <br />
      <div className="search-box">
        <div className="row">
          <Link to="/jobs">
            <button className="search">
              FIND VACANCIES
              <span className="mx-2">
                <FaSearch size={20} />
              </span>
            </button>
          </Link>
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="features-section">
        <div className="container">
          <div className="feature-row">
            <div className="row">
              <div className="col-md">
                <hr className="divider" />
                <h3 className="f-heading">
                  your Construction Recruitment Specialist
                </h3>
                <p className="f-para">
                  Estiva specializes in providing engineering, building envelope
                  and construction recruitment.
                  <br />
                  <br />
                  Our motto reflects our commitment: Building-Talent.
                </p>
              </div>
              <div className="col-md d-flex justify-content-center">
                <img className="f-img" height="200px" src={f1} alt="" />
              </div>
            </div>
          </div>
          <div className="feature-row">
            <div className="row">
              <div className="col-sm d-flex justify-content-center">
                <img className="f-img" height="200px" src={f3} alt="" />
              </div>
              <div className="col-sm">
                <hr className="divider-right" />
                <h3 className="f-heading-right">CLIENTS</h3>
                <p className="f-para-right">
                  As subject matter experts, we leverage our decades of industry
                  experience to bring you the best quality candidates possible.{" "}
                  <br />
                  <br />
                  We have extensive knowledge and understanding of the building
                  envelope and construction markets, throughout North America.{" "}
                  <br />
                  <br />
                  With our industry insight, and extensive candidate database,
                  we have the resources to building your team.
                </p>
              </div>
            </div>
          </div>

          <div className="feature-row">
            <div className="row">
              <div className="col-sm">
                <hr className="divider" />
                <h3 className="f-heading">
                  your Construction Recruitment Specialist
                </h3>
                <p className="f-para">
                  Estiva specializes in providing engineering, building envelope
                  and construction recruitment.
                  <br />
                  <br />
                  Our motto reflects our commitment: Building-Talent.
                </p>
              </div>
              <div className="col-sm d-flex justify-content-center">
                <img className="f-img" height="200px" src={f2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
