import React from "react";
import { Link } from "react-router-dom";
import ThreeItemCarousel from "../components/Carousel";
import Clients from "../components/Clients";
import { Container, Row, Col, Button, Card, ListGroup } from "react-bootstrap";
import "../index.css";
import EstiviaLogo from "./assets/EstiviaLogo.png";
import cr1 from "./assets/cr-1.jpg";
import mainrect from "./assets/main-rect.png";
import bglogo from "./assets/bg-logo.png";
import logo from "./assets/logo.png";
import f11 from "./assets/f-1 (1).jpg";
import f12 from "./assets/f-1 (2).jpg";
import f13 from "./assets/f-1 (3).jpg";
import footerlogo from "./assets/footerlogo.png";

const Home = () => {
  return (
    <div classNameName="">
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
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand" href="/#">
          {" "}
          <img className="navlogo" src={EstiviaLogo} alt="#A" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto w-100 justify-content-end">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/aboutus">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/jobs">
                VACANCIES
              </a>
            </li>
          </ul>
          <div className="nav-icons">
            <ul>
              <a href="/#">
                <i
                  className="fa-brands fa-square-facebook"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
              <a href="/#">
                <i
                  className="fa-brands fa-square-instagram"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
              <a href="/#">
                <i
                  className="fa-brands fa-linkedin"
                  style={{ color: "#ffffff" }}
                ></i>
              </a>
            </ul>
          </div>
        </div>
      </nav>

      <section>
        <div className="main">
          <div className="main-img">
            <img src={cr1} alt="" />
          </div>
          <div className="main-rect">
            <img src={mainrect} alt="" />
          </div>
          <div className="white-sheet">
            <img src={bglogo} alt="" />
          </div>
          <div className="main-logo">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="main-text">
            <p className="main-text-1">
              Estiva is your construction and engineering recruitment
              specialist.
            </p>
            <p className="main-text-2">
              We are a technical recruitment agency, focused on helping firms
              secure the best available talent.
            </p>
          </div>
          <div className="search-box">
            <input
              className="search-bar"
              placeholder="Search Jobs..."
              type="text"
            />
            <select className="select-sector" name="" id="">
              <option value="" selected>
                Select Sector
              </option>
              <option value="">Alpha</option>
              <option value="">Bravo</option>
              <option value="">Charlie</option>
            </select>
            <button className="search">
              <i
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#ffffff" }}
              ></i>{" "}
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="section-features">
        <div className="row">
          <div className="col-md-6">
            <hr className="divider" />
            <p className="feature-heading">
              YOUR CONSTRUCTION RECRUITMENT SPECIALIST
            </p>
            <p className="feature-main">
              Estiva specializes in providing engineering, building envelope and
              construction recruitment.
              <br />
              <br />
              Our motto reflects our commitment: Building-Talent.
            </p>
          </div>
          <div className="col-md-6">
            <div className="img-box1-3">
              <img className="feature-img" src={f11} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-features2">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box2">
              <img className="feature-img" src={f13} alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <hr className="divider" />
            <p className="feature-heading">CLIENT </p>
            <p className="feature-main">
              As subject matter experts, we leverage our decades of industry
              experience to bring you the best quality candidates possible.{" "}
              <br /> <br />
              We have extensive knowledge and understanding of the building
              envelope and construction markets, throughout North America.{" "}
              <br /> <br />
              With our industry insight, and extensive candidate database, we
              have the resources to building your team.
            </p>
          </div>
        </div>
      </section>

      <section className="section-features3">
        <div className="row">
          <div className="col-md-6">
            <hr className="divider" />
            <p className="feature-heading">CANDIDATES</p>
            <p className="feature-main">
              For candidates, we will provide premium opportunities to advance
              your career. <br />
              <br />
              We understand the unique structures within the firms we engage
              with, and match your experience, skill set, character and goals to
              them.
            </p>
          </div>
          <div className="col-md-6">
            <div className="img-box1-3">
              <img className="feature-img" src={f12} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-latest">
        <div className="latest-vac">
          <div className="centered">
            <img className="triangle" src="assets/tri.png" alt="" />
          </div>
          <section className="section-features3">
            <div className="row">
              <div className="">
                <p className="feature-heading-white">LATEST VACANCIES </p>
                <hr className="divider-white" />
              </div>
            </div>
          </section>
          <div className="container">
            <div className="jobs-car">
              <div className="row">
                <div className="clients-carousel owl-carousel">
                  <div className="single-box">
                    <div className="job-status">PERMANANT</div>
                    <div className="job-name mt-4">Mechanical Engineer</div>
                    <div className="row mt-2">
                      <div className="col-xs-12 col-md-6">
                        <div className="row rating-desc">
                          <div className="col-xs-3 col-md-3 text-right mt-4">
                            <span>
                              <i
                                className="fa-solid fa-building"
                                style={{ color: "#1677A7" }}
                              ></i>
                            </span>
                          </div>
                          <div className="col-xs-8 col-md-9 mt-4">
                            <div className="detail">
                              <span>Site Engineer</span>
                            </div>
                          </div>
                          <div className="col-xs-3 col-md-3 text-right mt-4">
                            <span>
                              <i
                                className="fa fa-sharp fa-solid fa-location-dot"
                                style={{ color: "#1677A7" }}
                              ></i>
                            </span>
                          </div>
                          <div className="col-xs-8 col-md-9 mt-4">
                            <div className="detail">
                              <span>British Columbia - States</span>
                            </div>
                          </div>
                          <div className="col-xs-3 col-md-3 text-right mt-4">
                            <span>
                              <i
                                className="fa fa-regular fa-credit-card"
                                style={{ color: "#1677A7" }}
                              ></i>
                            </span>
                          </div>
                          <div className="col-xs-8 col-md-9 mt-4">
                            <div className="detail">
                              <span>$45.00 - $50.00 Per Year</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="mt-4" />
                      <div className="img-area">
                        <img alt="" className="img" />
                      </div>

                      {/* <div className="container">
                        <div className="jobs-car">
                          <div className="row">
                            <div className="clients-carousel owl-carousel">
                              <div className="single-box">
                                <div className="job-status">PERMANANT</div>
                                <div className="job-name mt-4">
                                  Mechanical Engineer
                                </div>
                                <div className="row mt-2">
                                  <div className="col-md-6">
                                    <div className="row rating-desc">
                                      <div className="col-3 text-right mt-4">
                                        <i
                                          className="fa-solid fa-building"
                                          style={{ color: "#1677A7" }}
                                        />
                                      </div>
                                      <div className="col-9 mt-4">
                                        <div className="detail">
                                          <span>Site Engineer</span>
                                        </div>
                                      </div>
                                      <div className="col-3 text-right mt-4">
                                        <i
                                          className="fa fa-sharp fa-solid fa-location-dot"
                                          style={{ color: "#1677A7" }}
                                        />
                                      </div>
                                      <div className="col-9 mt-4">
                                        <div className="detail">
                                          <span>British Columbia - States</span>
                                        </div>
                                      </div>
                                      <div className="col-3 text-right mt-4">
                                        <i
                                          className="fa fa-regular fa-credit-card"
                                          style={{ color: "#1677A7" }}
                                        />
                                      </div>
                                      <div className="col-9 mt-4">
                                        <div className="detail">
                                          <span>$45.00 - $50.00 Per Year</span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <hr className="mt-4" />
                                  <div className="img-area">
                                    <img
                                      alt=""
                                      className="img-fluid"
                                      src="assets/pic.jpg"
                                    />
                                  </div>
                                  <div className="content">
                                    <p className="employee-name">Juan Mendis</p>
                                    <p className="employee-qual">
                                      Dsenior Consultant | mechanical
                                      Engineering | aU
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="see-vac">
                <a href="/jobs">SEE ALL VACANCIES</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-xs-5">
              <div className="footer-text pull-left">
                <div className="footer-logo d-flex">
                  <a href="/#">
                    <img src={footerlogo} alt="" />
                  </a>
                </div>
                <div className="footer-social">
                  <ul>
                    <a href="/">
                      <i
                        className="fa-brands fa-square-facebook"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                    <a href="/">
                      <i
                        className="fa-brands fa-square-instagram"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                    <a href="/">
                      <i
                        className="fa-brands fa-linkedin"
                        style={{ color: "#ffffff" }}
                      ></i>
                    </a>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <div className="footer-box">
                <h5>COMPANY</h5>
                <ul>
                  <li>
                    <a href="/#">ABOUT US</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <div className="footer-box">
                <h5>CAREERS</h5>
                <ul>
                  <li>
                    <a href="/#">VACANCIES</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <div className="footer-box">
                <h5>CONTACT US</h5>
                <ul>
                  <li>
                    <a href="/">careers@estivagroup.com</a>
                  </li>
                  <li>
                    <a href="/">info@estivagroup.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="rights">
          <p>© 2023 Block, Inc.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
