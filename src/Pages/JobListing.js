import React, { useState, useEffect } from 'react'
import JobDetail from './JobDetail'
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';
import ReactPaginate from "react-paginate";

const JobListing = () => {
  const [ jobs, setJobs ] = useState(null)
  const [ query, setQuery ] = useState(null)
  const [ error, setError ] = useState(false)
  const [ page, setPage] = useState(1);
  const [ pageCount, setpageCount] = useState(10);

  let limit = 5;
 
  useEffect(() => {

    const fetchJobs = async () => {
      const response = await fetch(`http://localhost:4000/api/jobs?page=1&limit=${limit}`)
      const json = await response.json()
      setJobs(json)

      const total = response.headers.get('x-total-count')
      setpageCount(Math.ceil(parseInt(total) / limit));
      
      console.log("total >>"+total) //9
      console.log("pagecount >>"+pageCount) // total/limit
      console.log("fetch working!!!")
    }
    fetchJobs()

  }, [limit])

  const fetchJobs = async (currentPage) => {
    const res = await fetch(
      `http://localhost:4000/api/jobs?page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick =  async (data) => {   
    let currentPage = data.selected + 1;
    console.log(currentPage);
    const commentsFormServer = await fetchJobs(currentPage);
    setJobs(commentsFormServer);
    // scroll to the top
    window.scrollTo(0, 0)
  };

  // ---------SEARCH functions below----------
  //converts hello to Hello
  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
 
  function handleSearch(e){
    e.preventDefault()
    const x = toTitleCase(query) // Doctor 
    const y = query.toLowerCase() //doctor
    const resultsArray = jobs.filter(job => job.title.includes(query) || job.title.includes(x) || job.title.includes(y) || job.details.includes(query) || job.details.includes(x) || job.details.includes(x))
    console.log(resultsArray)
    setJobs(resultsArray)
    if(resultsArray.length == 0) setJobs(null)
  }
  return (
    
    <div className='container'> 

    <h3>Search</h3>   
    <form class="search container" onSubmit={handleSearch}>
      <div class="input-group rounded">
        <input type="text" class="form-control rounded-left" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" onChange={(e) => setQuery(e.target.value)} id="search" />
        <div class="input-group-append">
          <button class="btn btn-primary rounded-right" type="submit" id="button-addon2">Search</button>
        </div>
      </div>
    </form>


          {/* page refresh button */}
          <button className='btn btn-sm float-end' onClick={()=>{            
              window.location.reload(false);            
            }}>
              Reset Search Filter
          </button>
<br />
        <h3>Vacancies</h3>   
        { (!jobs) && 
        <div>No Vacancies found</div>
         }
        {jobs && jobs.map(job => (
             <>
               <Alert key="primary" variant="primary">
             <Link to={`/jobs/${job._id}`}>
               {/* <SingleAttire attire={attire} /> */}
                  <div key={job.id}>
                    <h3>{job.title}</h3>
                  </div>
                
               {/* <JobDetail job={job} key={job._id} /> */}
             </Link>
             <div>
              {job.details}
             </div>
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

  )
}

export default JobListing


