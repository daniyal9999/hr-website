import React from "react";
import Carousel from "../components/Carousel";
import img2 from "./Images/img1.jpg";
import img3 from "./Images/img3.jpg";
import bg2 from "./assets/bg-2.png";
import blog1 from "./assets/blog-1.jpg";
import ThreeItemCarousel from "../components/Carousel";
const Contactus = () => {
  return (
    <>
      {/* Legacy About Us Section */}
      {/* <section id="about" className="py-0">
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

           <div className="container">
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
          </div> 
        </section> */}

      {/* <Carousel /> */}

      {/* ABOUT US */}
      <section>
        <div className="main">
          <img className="bg-img" src={bg2} alt="" />
        </div>
      </section>
      <div className="container">
        <div className="feature-row">
          <div className="row">
            <div className="col-sm">
              <hr className="divider-right" />
              <h3 className="about-us f-heading-right">ABOUT US</h3>
              <p style={{ textAlign: "center" }} className="f-para mt-5">
                Estiva Group is a highly dedicated firm of Recruitment and
                Search specialists, serving the construction and engineering
                sectors. Founded by industry experts with over 30 years of
                Construction and Recruitment experience, Estiva is committed to
                managing your talent requirements successfully. <br />
                <br />
                We find our clients the best talent, allowing their
                organizations to evolve and grow. Our advice is value added and
                reflects our decades of industry and sector specific, hands-on
                experience. We understand the needs of construction, and provide
                the highest level of service throughout the entire recruitment
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="card">
          <div className="row">
            <div
              className="col-sm col-md-5"
              style={{
                backgroundImage: `url(${blog1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="col-sm col-md-7">
              <div className="card-body">
                <h5 className="card-title">Helping Employers.</h5>
                <p className="mt-5 card-text">
                  Our client and candidate focused approach provides next-level
                  talent across multiple industries and eliminates the need to
                  shop around for multiple staffing solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ThreeItemCarousel />
      {/* What We Do For Job Seekers */}
      <div className="container my-5">
        <div className="card">
          <div className="row">
            <div
              className="col-sm col-md-5"
              style={{
                backgroundImage: `url(${blog1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="col-sm col-md-7">
              <div className="card-body">
                <h5 className="card-title">What We Do For Job Seekers.</h5>
                <p className="mt-5 card-text">
                  Our team consists of experts in the construction industry who
                  have experience in hiring the best talent. We understand the
                  unique challenges that come with finding skilled workers in
                  construction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
