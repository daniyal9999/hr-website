import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'
import ThreeItemCarousel from '../components/Carousel'
import { FaHardHat, FaTools, FaDraftingCompass, FaBuilding, FaHammer } from 'react-icons/fa';
import { Container, Row, Col, Button, Card, ListGroup  } from 'react-bootstrap';
import constructionImage from './construction.jpg';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import home from './home.jpg'
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


        {/* <Hero/> */}
        <ThreeItemCarousel/>
    </div>
  )
}

export default Home