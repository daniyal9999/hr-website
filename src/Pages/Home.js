import React from 'react'
import { Link } from 'react-router-dom';
import ThreeItemCarousel from '../components/Carousel'
import { Container, Row, Col, Button, Card, ListGroup  } from 'react-bootstrap';
import '../index.css'

const Home = () => {
  return (
    <div className=''>
        {/* Home Page */}
        <section className='bg-img'>
          <header className="text-light py-5">
            <Container> 
              <Row>
                <Col md={12}>

                  <Link to="/jobs">
                    <div className='text-center mx-auto my-5'>                    
                      <Button variant="lg text-white btn-primary rounded-pill" className="button-margin">Find Candidates</Button>
                    </div>
                  </Link>

                </Col>
              </Row>
            </Container>
          </header>
      </section>
      <ThreeItemCarousel/>
    </div>
  )
}

export default Home