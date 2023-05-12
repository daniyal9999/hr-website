import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../Pages/Images/logo.jpg";
import "../index.css";
import { Link } from "react-router-dom";

import footerlogo from "../Pages/assets/footer-logo.png";
import zoho from "../Pages/assets/zoho.png";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      {/* <MDBFooter color="" className="text-center text-lg-start bg-blue">
        <section className="pt-2">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="1" lg="2" xl="1" className="mx-auto mb-4">
                <img src={Logo} height="150rem" alt="logo" />
              </MDBCol>

              <MDBCol md="1" lg="3" xl="1" className="mx-auto mb-4 px-5">
                <h3 className="text-uppercase fw-bold mb-4 mx-3">
                  Estiva Group
                </h3>

                <div className="d-flex mx-3">
                  <a href="https://www.linkedin.com/" className="mx-1">
                    <FaLinkedin />
                  </a>
                  <a href="https://www.instagram.com/" className="mx-3">
                    <FaInstagram />
                  </a>
                  <a href="https://www.facebook.com/" className="mx-1">
                    <FaFacebook />
                  </a>
                </div>
              </MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="mx-auto mb-4"></MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company</h6>
                <p className="hover-effect">
                  <Link to="/aboutus">About us</Link>
                </p>
              </MDBCol>

              <MDBCol md="1" lg="1" xl="1" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Careers</h6>
                <p className="hover-effect">
                  <Link to="/jobs">Vacancies</Link>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact Us</h6>
                <a className="text-light" href="mailto:careers@estivagroup.com">
                  careers@estivagroup.com
                </a>{" "}
                <br />
                <a className="text-light" href="mailto:info@estivagroup.com">
                  info@estivagroup.com
                </a>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </MDBFooter> */}

      {/* FOOTER SECTION */}
      <div className="container-fluid">
        <div className="footer-content">
          <div className="row">
            <div className="logo-footer col-md-5 col-sm-4 col-xs-4">
              <div className="footer-text pull-left">
                <div className="logo d-flex">
                  <a href="/">
                    <img
                      className="logofooter"
                      height="100px"
                      src={footerlogo}
                      alt=""
                    />
                  </a>
                </div>

                <div className="footer-social-icons">
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-0 text-light footer-fa fa-brands"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-light footer-fa fa-brands"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-0 text-light footer-fa fa-brands"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="first-link col-md-2 col-sm-2 col-xs-2">
              <h5 className="footer-heading">COMPANY</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/aboutus">ABOUT US</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-2 col-xs-2">
              <h5 className="footer-heading">CAREERS</h5>
              <ul className="footer-list">
                <li>
                  <Link to="/jobs">VACANCIES</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-sm-2 col-xs-2">
              <h5 className="footer-heading">CONTACT US</h5>
              <ul className="footer-list">
                <li>
                  <a href="">careers@estivagroup.com</a>
                </li>
                <li>
                  <a href="">info@estivagroup.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="rights">
        <h3>© {date} Estiva, Inc.</h3>
      </div>
      <div className="rights">
        <h3>
          Powered by <br />
          <span>
            <img height="20px" src={zoho} alt="zoho" />
            <img />
          </span>
        </h3>
      </div>
    </>
  );
};

export default Footer;
