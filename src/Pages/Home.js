import React from 'react'
import { Link } from 'react-router-dom';
import ThreeItemCarousel from '../components/Carousel'
import Clients from '../components/Clients'
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

                    <div className='text-center mx-auto my-5'>                    
                  <Link to="/jobs">
                      <Button variant="lg text-white btn-primary rounded-pill" className="button-margin">Find Candidates</Button>
                  </Link>
                    </div>

                </Col>
              </Row>
            </Container>
          </header>
      </section>
      <Clients/>
      <ThreeItemCarousel/>
    </div>
  )
}

export default Home