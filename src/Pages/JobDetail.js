import React, { useState, useEffect } from "react";
import JobForm from "../components/Form";
import { useParams } from "react-router-dom";
import EstiviaLogo from "./assets/EstiviaLogo.png";

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  // console.log('http://localhost:4000/api/jobs/'+id)
  useEffect(() => {
    fetch("https://stg-api.estivagroup.com/" + "api/jobs/" + id)
      .then((response) => response.json())
      .then((data) => setJob(data));
    console.log("single fetch working!!!");
  }, []);

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
      <div className="container">
        {job && (
          <div key={id}>
            <br />
            <h1 style={{ color: "rgba(3,47,104)" }}>{job.title}</h1>
            <br />
            <strong style={{ color: "rgba(3,47,104)" }}>
              Description
            </strong>{" "}
            <br />
            {job.details}
            <br />
            <br />
            <strong style={{ color: "rgba(3,47,104)" }}>
              Job Requirements
            </strong>{" "}
            <br />
            {job.requirements}
          </div>
        )}

        <JobForm id={id} />
      </div>
    </>
  );
};

export default JobDetail;
