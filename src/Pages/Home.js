import React from 'react'
import Hero from '../components/Hero'
import ThreeItemCarousel from '../components/Carousel'
import { FaHardHat, FaTools, FaDraftingCompass, FaBuilding, FaHammer } from 'react-icons/fa';
import { Container, Row, Col, Button, Card, ListGroup  } from 'react-bootstrap';
import constructionImage from './construction.jpg';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import '../index.css'

const Home = () => {
  return (
    <div className=''>
        {/* Home Page */}
        <section className='bg-img'>
          <header className="text-light py-5 foreground ">
            <Container> 
              <Row>
                <Col md={12}>
                  
                  <div className='text-center mx-auto my-5 '>
                    <h1 className="mb-4 ">Estiva Construction Recruitment</h1> 
                    <p className="lead">
                      Estiva specializes in providing engineering, building envelope and
                      construction recruitment.
                      We are your Construction Recruitment Specialist.
                      Our moto reflects our commitment: Building-Talent.
                    </p>
                  <Button variant="md text-white btn-primary rounded-pill" className="my-5 ">Find Candidates</Button>
                  </div>
                </Col>
                {/* <Col md={6}>
                  <img src={img1} alt="Construction" className="img-fluid" />
                </Col> */}
              </Row>
            </Container>
          </header>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-5 glass-effect">
        <div className="container">
          <div className="row align-items-center">

          <u><h2 className='text-center mb-4'>About Us</h2></u> 
          <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div className="glass-effect px-5">
                <p className="text-center mb-0 border border-dark">
                  <img src={img2} alt="Construction Workers" className="img-fluid" />
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <p className="lead">
              Estiva Group is a highly dedicated firm of Recruitment and Search specialists, serving the construction and engineering sectors. Founded by industry experts with over 30 years of Construction and Recruitment experience, Estiva is committed to managing your talent requirements successfully.              </p>
              <p className="lead">
              We find our clients the best talent, allowing their organizations to evolve and grow. Our advice is value added and reflects our decades of industry and sector specific, hands-on experience. We understand the needs of construction, and provide the highest level of service throughout the entire recruitment process.              </p>
            </div>
            
          </div>
        </div>
      </section>

      
     {/* Clients Section */}
     <section id="clients" className="bg-dark text-white py-5 ">
        <Container>
          <Row>
            <Col md={8} className="text-center mx-auto">
              <u><h2 className="mb-4">Our Clients</h2></u>
              <p className="lead mb-4">
                As subject matter experts, we leverage our decades of industry experience to bring you the best quality candidates possible. We have extensive knowledge and understanding of the building envelope and construction markets, throughout North America. With our industry insight, and extensive candidate database, we have the resources to building your team.
              </p>
            </Col>
          </Row>
          <Row className="mt-5 text-dark">
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={constructionImage} />
                <Card.Body>
                  <Card.Title>Services</Card.Title>
                  <Card.Text>
                    We offer a range of recruitment services to meet your needs.
                  </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Permanent Placement</ListGroup.Item>
                  <ListGroup.Item>Contract Placement</ListGroup.Item>
                  <ListGroup.Item>Executive Search</ListGroup.Item>
                  <ListGroup.Item>Outsourcing Solutions</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button variant="primary">See All Services</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={constructionImage} />
                <Card.Body>
                  <Card.Title>Candidates</Card.Title>
                  <Card.Text>
                    At Estiva, we provide premium opportunities to advance your career.
                  </Card.Text>
                </Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Engineering</ListGroup.Item>
                  <ListGroup.Item>Building Envelope</ListGroup.Item>
                  <ListGroup.Item>Construction Management</ListGroup.Item>
              <ListGroup.Item>General Contracting</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary">View All Jobs</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={constructionImage} />
            <Card.Body>
              <Card.Title>Our Expertise</Card.Title>
              <Card.Text>
                We have extensive knowledge of the building envelope and construction markets.
              </Card.Text>
            </Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Engineering</ListGroup.Item>
              <ListGroup.Item>Building Envelope</ListGroup.Item>
              <ListGroup.Item>Construction Management</ListGroup.Item>
              <ListGroup.Item>General Contracting</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </section>

        {/* Our Services Section */}
<section id="services" className="py-5" >
  <Container>
    <u><h2 className="text-center mb-5">Our Services</h2></u>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <FaHardHat className="mb-4" size={60} />
            <Card.Title>Construction Management</Card.Title>
            <Card.Text>
              We provide construction management services to ensure your project is completed on time, on budget, and to the highest quality standards.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <FaTools className="mb-4" size={60} />
            <Card.Title>General Contracting</Card.Title>
            <Card.Text>
              Our general contracting services cover everything from project planning and scheduling to materials procurement and subcontractor management.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <FaDraftingCompass className="mb-4" size={60} />
            <Card.Title>Engineering</Card.Title>
            <Card.Text>
              Our team of experienced engineers provide a wide range of engineering services to help you design and build the best possible construction projects.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mt-5">
      <Col md={4}>
        <Card>
          <Card.Body>
            <FaBuilding className="mb-4" size={60} />
            <Card.Title>Building Envelope</Card.Title>
            <Card.Text>
              Our building envelope services ensure that your building's exterior is properly designed, constructed, and maintained to keep occupants safe and comfortable.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <FaHammer className="mb-4" size={60} />
            <Card.Title>Building Restoration</Card.Title>
            <Card.Text>
              We provide building restoration services to repair and renovate historic and aging buildings, while preserving their unique character and charm.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <FaTools className="mb-4" size={60} />
            <Card.Title>Renovation &amp; Remodeling</Card.Title>
            <Card.Text>
              Our renovation and remodeling services transform outdated or unused spaces into modern, functional areas that meet your specific needs and preferences.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
</section>

      

   
        {/* <Hero/> */}
        <ThreeItemCarousel/>
    </div>
  )
}

export default Home