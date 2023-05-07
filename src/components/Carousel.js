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
  const [jobs, setJobs] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        `http://localhost:4000/api/jobs?page=1&limit=3`
      );
      const json = await response.json();
      setJobs(json);
      console.log(jobs);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container">
      <br />
      <h2 style={{ color: "rgba(3,47,104)" }}>Latest Vacancies</h2>
      <Container>
        <Row>
          {!jobs && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}

          {jobs &&
            jobs.map((job) => (
              <Col key={job._id} sm={4} className="my-3">
                <Card border="primary" style={{ width: "17rem" }}>
                  <Link
                    to={`/jobs/${job._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Body>
                      <Card.Title style={{ color: "#308dd9" }}>
                        {job.title}
                      </Card.Title>
                      <p>
                        <FaIndustry style={{ color: "#308dd9" }} /> {job.sector}{" "}
                        <FaMapMarkerAlt
                          style={{ color: "#308dd9", marginLeft: "1rem" }}
                        />{" "}
                        {job.location}{" "}
                        <FaBriefcase
                          style={{ color: "#308dd9", marginLeft: "1rem" }}
                        />{" "}
                        {job.salary}
                      </p>
                      <Card.Text>{job.details.substring(0, 90)}...</Card.Text>
                    </Card.Body>
                    {/* <Card.Header className='btn btn-primary  d-grid gap-2'>View</Card.Header> */}
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </Container>

      <Link to="/jobs">
        <Stack gap={1} className="col-md-5 mx-auto m-3">
          <Button variant="primary border-lg">See All Vacancies</Button>
        </Stack>
      </Link>
    </div>
  );
};

export default Carousel;
