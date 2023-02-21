import React, { useState, useEffect } from 'react'
import JobDetail from './JobDetail'
import { Link, useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

const JobListing = () => {
  const [ jobs, setJobs ] = useState(null)
  const [ query, setQuery ] = useState(null)
  const [ error, setError ] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {

    fetch('http://localhost:4000/api/jobs')
    .then((response)=>response.json())
    .then((data)=>setJobs(data))
    console.log("fetch working!!!")

  }, [])
  //converts hello to Hello
  function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
  }
 
  function handleSubmit(e){
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

        <form className="search" onSubmit={handleSubmit}>
          <input
              className="search__input"
              type="text"
              onChange={(e) => setQuery(e.target.value)} 
              id="search"
          />
          <button >
              Search
          </button>
        </form>
          <button onClick={()=>{
            
              window.location.reload(false);
            
            }}>
              Reset
          </button>

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
      </div>

  )
}

export default JobListing


