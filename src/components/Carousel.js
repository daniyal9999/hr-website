import React, { useState, useEffect } from 'react'
import { Stack, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Carousel = () => {
    const [ jobs, setJobs ] = useState(null)

    useEffect(() => {
        const fetchJobs = async () => {
            const response = await fetch(`http://localhost:4000/api/jobs?page=1&limit=3`)
            const json = await response.json()
            setJobs(json)  
            console.log(jobs)
        }
        fetchJobs()    
      }, [])

  return (
    <div className='container'>
        <br />
        <h1>Latest Vacancies</h1>        
        <Container>
            <Row>
                {jobs && jobs.map(job => (
                <Col key={job._id} sm={4} className="my-3">
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header className='btn btn-success'><span class="badge">5</span>View</Card.Header>
                        <Card.Body>
                        <Card.Title>{job.title}</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                        <Link to={`/jobs/${job._id}`}>
                            <Card.Header className='btn btn-lg btn-primary  d-grid gap-2'>View</Card.Header>
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
  )
}

export default Carousel