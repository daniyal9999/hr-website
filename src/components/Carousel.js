import React, { useState, useEffect } from "react";
import {
  Stack,
  Button,
  Card,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaIndustry, FaBriefcase } from "react-icons/fa";

const Carousel = () => {
  const [jobs, setJobs] = useState([
    {
      _id: "642480e538e32e80cd6e4457",
      title: "General Foreman",
      details:
        "They respond by investing in a total in-house solution to ensure flexibility, control and above all quality and safety. They work UK wide within Utilities, Tunnelling, Heavy Civils, infrastructure and Rail with projects ranging from £500k to £50m.",
      requirements:
        "Manage workload to assigned gangs and works area. Check that gangs have taken all photographs as required by the contract. Communicate with the client to ensure that work is correctly prioritised and given to the correct gangs. Check that completed jobs are closed correctly and Highway Authority notified.",
      sector: "Rails",
      location: "London",
      salary: "5000",
      createdAt: "2023-03-29T18:18:13.095Z",
      updatedAt: "2023-03-29T18:18:13.095Z",
      __v: 0,
    },
    {
      _id: "641d4c0d675618e9910bd92d",
      title: "Site engineer",
      details:
        "looking for a site manager with 2 to 3 years of experience in full stack development",
      sector: "Rails",
      location: "London",
      createdAt: "2023-03-24T07:06:53.863Z",
      updatedAt: "2023-03-24T07:48:17.495Z",
      __v: 0,
      salary: "5000",
    },
    {
      _id: "641d4c0d675618e9910bd92d",
      title: "Site engineer",
      details:
        "looking for a site manager with 2 to 3 years of experience in full stack development",
      sector: "Rails",
      location: "London",
      createdAt: "2023-03-24T07:06:53.863Z",
      updatedAt: "2023-03-24T07:48:17.495Z",
      __v: 0,
      salary: "5000",
    },
  ]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        `https://stg-api.estivagroup.com/api/jobs?page=1&limit=3`
      );
      const json = await response.json();
      setJobs(json);
      console.log(jobs);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container p-4" style={{ background: "#d1e7f2" }}>
      <br />
      <h2 style={{ color: "rgba(3,47,104)" }}>
        <u>
          <b>Latest Vacancies</b>
        </u>
      </h2>
      <Row>
        {!jobs && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}

        {jobs &&
          jobs.map((job) => (
            <Col key={job._id} sm={4} className="my-3">
              <Card
                border="primary"
                style={{ background: "#eeeefe", width: "17rem" }}
              >
                <Link
                  to={`/jobs/${job._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Card.Body>
                    <Card.Title
                      style={{
                        color: "#005a87",
                        fontWeight: "bold",
                        fontSize: "1.5rem",
                      }}
                    >
                      {job.title}
                    </Card.Title>
                    <p style={{ color: "#005a87" }}>
                      <FaIndustry style={{ color: "#005a87" }} /> {job.sector}{" "}
                      <FaMapMarkerAlt
                        style={{ color: "#005a87", marginLeft: "1rem" }}
                      />{" "}
                      {job.location}{" "}
                      <FaBriefcase
                        style={{ color: "#005a87", marginLeft: "1rem" }}
                      />{" "}
                      {job.salary}
                    </p>
                    <Card.Text style={{ color: "#002436" }}>
                      {job.details.substring(0, 80)}...
                    </Card.Text>
                  </Card.Body>
                  {/* <Card.Header className="btn btn-primary  d-grid gap-2">
                      View
                    </Card.Header> */}
                </Link>
              </Card>
            </Col>
          ))}
      </Row>

      <Link to="/jobs">
        <Stack gap={1} className="col-md-5 mx-auto m-3">
          <Button variant="primary border-lg">See All Vacancies</Button>
        </Stack>
      </Link>
    </div>
  );
};

export default Carousel;
