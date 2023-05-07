import React from "react";
import Carousel from "../components/Carousel";
import img2 from "./Images/img1.jpg";
import img3 from "./Images/img3.jpg";
import EstiviaLogo from "./assets/EstiviaLogo.png";
import cr1 from "./assets/cr-1.jpg";
import mainrect from "./assets/main-rect.png";
import bglogo from "./assets/bg-logo.png";
import logo from "./assets/logo.png";
import f11 from "./assets/f-1 (1).jpg";
import f12 from "./assets/f-1 (2).jpg";
import f13 from "./assets/f-1 (3).jpg";
import footerlogo from "./assets/footerlogo.png";
const Contactus = () => {
  return (
    <>
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
              <a className="nav-link" href="/#">
                HOME <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us.html">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
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
      <div className="">
        {/* About Us Section */}
        <section id="about" className="py-0">
          <div className=" d-flex justify-content-center align-items-center">
            <div className="">
              <p className="text-center mb-0 ">
                <img
                  src={img3}
                  alt="Construction Workers"
                  className="img-fluid "
                />
              </p>
            </div>
          </div>

          {/* <div className="container">
            <h2 className=" my-4" style={{ color: "rgba(3,47,104)" }}>
              About Us
            </h2>
            <div className="col-md-12">
              <p className=" font-weight-bold" style={{ fontSize: "1.3rem" }}>
                Estiva Group is a highly dedicated firm of Recruitment and
                Search specialists, serving the construction and engineering
                sectors. Founded by industry experts with over 30 years of
                Construction and Recruitment experience, Estiva is committed to
                managing your talent requirements successfully.{" "}
              </p>
              <p className=" font-weight-bold" style={{ fontSize: "1.3rem" }}>
                We find our clients the best talent, allowing their
                organizations to evolve and grow. Our advice is value added and
                reflects our decades of industry and sector specific, hands-on
                experience. We understand the needs of construction, and provide
                the highest level of service throughout the entire recruitment
                process.{" "}
              </p>
            </div>
            <br />
            <br />
          </div> */}
        </section>

        {/* <Carousel /> */}
      </div>
    </>
  );
};

export default Contactus;
