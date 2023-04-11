import React, { useState, useEffect } from 'react'
import JobForm from '../components/Form'
import { useParams } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const [ job, setJob ] = useState(null)

  // console.log('http://localhost:4000/api/jobs/'+id)
  useEffect(() => {

    fetch(process.env.REACT_APP_API + 'api/jobs/'+id)
    .then((response)=>response.json())
    .then((data)=>setJob(data))
    console.log("single fetch working!!!")

  }, [])

  return (
    <div className='container'>
        

    {job && 
        <div key={id}>
            <br />
            <h1 className='text-primary'>{job.title}</h1>
            <br />
            <strong>Description</strong> <br />
            {job.details}
            <br />
            <br />
            <strong>Job Requirements</strong> <br />
            {job.requirements}
        </div>
     } 
     
      <JobForm id={id}/>
    </div>
  )
}

export default JobDetail