import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Alert, Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { FaMapMarkerAlt, FaIndustry, FaBriefcase } from "react-icons/fa";
import EstiviaLogo from "./assets/EstiviaLogo.png";
const JobListing = () => {
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
        "looking for a site manager with 2 years experience in full stack development",
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
        "looking for a site manager with 2 years experience in full stack development",
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
        "looking for a site manager with 2 years experience in full stack development",
      sector: "Rails",
      location: "London",
      createdAt: "2023-03-24T07:06:53.863Z",
      updatedAt: "2023-03-24T07:48:17.495Z",
      __v: 0,
      salary: "5000",
    },
  ]);
  const [query, setQuery] = useState(null);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [pageCount, setpageCount] = useState(10);

  let limit = 7;

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch(
        `http://localhost:4000/api/jobs?page=1&limit=${limit}`
      );
      const json = await response.json();
      setJobs(json);

      const total = response.headers.get("x-total-count");
      setpageCount(Math.ceil(parseInt(total) / limit));

      console.log("total >>" + total); //9
      console.log("pagecount >>" + pageCount); // total/limit
      console.log("fetch working!!!");
    };
    fetchJobs();
  }, [limit]);

  const fetchJobs = async (currentPage) => {
    const res = await fetch(
      process.env.REACT_APP_API + `api/jobs?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    console.log(currentPage);
    const commentsFormServer = await fetchJobs(currentPage);
    setJobs(commentsFormServer);
    // scroll to the top
    window.scrollTo(0, 0);
  };

  // ---------SEARCH functions below----------
  //converts hello to Hello
  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  function handleSearch(e) {
    e.preventDefault();
    const x = toTitleCase(query); // Doctor
    const y = query.toLowerCase(); //doctor
    const resultsArray = jobs.filter(
      (job) =>
        job.title.includes(query) ||
        job.title.includes(x) ||
        job.title.includes(y) ||
        job.details.includes(query) ||
        job.details.includes(x) ||
        job.details.includes(x)
    );
    console.log(resultsArray);
    setJobs(resultsArray);
    if (resultsArray.length == 0) setJobs(null);
  }
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
        <h3 style={{ color: "rgba(3,47,104)" }}>Search</h3>
        <form class="search container" onSubmit={handleSearch}>
          <div class="input-group rounded">
            <input
              type="text"
              class="form-control rounded-left"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={(e) => setQuery(e.target.value)}
              id="search"
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary rounded-right"
                type="submit"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </div>
        </form>

        {/* page refresh button */}
        <button
          className="btn btn-sm float-end"
          onClick={() => {
            window.location.reload(false);
          }}
        >
          Reset Search Filter
        </button>
        <br />

        <h3 style={{ color: "rgba(3,47,104)" }}>Vacancies</h3>
        {!jobs && (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {jobs &&
          jobs.map((job) => (
            <>
              <Alert key="primary" variant="dark">
                <Link to={`/jobs/${job._id}`}>
                  <div key={job.id}>
                    <h3>{job.title}</h3>
                  </div>
                </Link>
                <p>
                  <FaIndustry style={{ color: "#308dd9" }} /> {job.sector}{" "}
                  <FaMapMarkerAlt
                    style={{ color: "#308dd9", marginLeft: "2rem" }}
                  />{" "}
                  {job.location}{" "}
                  <FaBriefcase
                    style={{ color: "#308dd9", marginLeft: "2rem" }}
                  />{" "}
                  {job.salary}
                </p>
                <div>{job.details.substring(0, 290)}...</div>
              </Alert>
            </>
          ))}

        <div>
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={1}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={"pagination justify-content-center"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextClassName={"page-item"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </>
  );
};

export default JobListing;
