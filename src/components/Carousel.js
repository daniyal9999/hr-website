import React from 'react'
import { Stack, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const carousel = () => {
  return (
    <div className='container'>
        <br />
        <h1>Latest Vacancies</h1>        
        <Container>
            <Row>
                <Col sm={4} className="my-3">
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>

                <Col sm={4} className="my-3">
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>

                <Col sm={4} className="my-3">
                    <Card border="primary" style={{ width: '18rem' }}>
                        <Card.Header>Header</Card.Header>
                        <Card.Body>
                        <Card.Title>Primary Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        </Card.Body>
                    </Card> 
                </Col>
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

export default carousel