import React, { useState, useEffect } from 'react'
import JobForm from '../components/Form'
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const [ job, setJob ] = useState(null)

  // console.log('http://localhost:4000/api/jobs/'+id)
  useEffect(() => {

    fetch('http://localhost:4000/api/jobs/'+id)
    .then((response)=>response.json())
    .then((data)=>setJob(data))
    console.log("single fetch working!!!")

  }, [])

  return (
    <div className='container'>
        

    {job && 
        <div key={id}>
            <h1>{job.title}</h1>
            {job.details}
        </div>
     } 
     
      <JobForm id={id}/>
    </div>
  )
}

export default JobDetail