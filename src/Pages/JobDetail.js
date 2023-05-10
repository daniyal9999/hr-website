import React, { useState, useEffect } from "react";
import JobForm from "../components/Form";
import { useParams } from "react-router-dom";
import bg4 from "./assets/bg-4.png";

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
      <section>
        <div className="main">
          <img className="bg-img" src={bg4} alt="" />
        </div>
      </section>
      <div className="container">
        {job && (
          <div key={id}>
            <hr class="divider"></hr>
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
