import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css'
import people from '../Pages/Images/people.jpg'
import handshake from '../Pages/Images/handshake.jpg'
import clients from '../Pages/Images/clients.jpg'

function Home() {
  return (
    <Container fluid className="my-container">
  <Container>
    <Row className="mt-5">
      <Col md={8} className="order-2 order-md-1">
        <h2 className="text-center heading-blue" style={{ color: 'rgba(3,47,104)' }}>Your Construction Recruitment Specialist</h2>
        <p className="subtitle" style={{ fontSize: '1.2rem', textAlign: 'justify' }}>Estiva specializes in providing engineering, building envelope and construction recruitment.</p>
        <p className="motto" style={{ fontSize: '1.2rem', textAlign: 'justify' }}>Our motto reflects our commitment: Building-Talent.</p>
      </Col>
      <Col md={4} className="order-1 order-md-2">
        <img src={clients} alt="Construction Image" className="img-fluid" />
      </Col>
    </Row>
    <Row className="my-4">
      <Col md={6} className="order-2 order-md-1">
        <img src={handshake} alt="Construction Image" className="img-fluid" />
      </Col>
      <Col md={6} className="order-1 order-md-2">
        <h2 className="text-center heading-blue" style={{ color: 'rgba(3,47,104)' }}>Clients</h2>
        <p style={{ fontSize: '1.2rem', textAlign: 'justify' }}>As subject matter experts, we leverage our decades of industry experience to bring you the best quality candidates possible. </p>
        <p style={{ fontSize: '1.2rem', textAlign: 'justify' }}>We have extensive knowledge and understanding of the building envelope and construction markets, throughout North America.</p>
        <p style={{ fontSize: '1.2rem', textAlign: 'justify' }}>With our industry insight, and extensive candidate database, we have the resources to building your team.</p>
      </Col>
    </Row>
    <Row className="my-4">
      <Col md={8} className="order-2 order-md-1">
        <h2 className="text-center heading-blue" style={{ color: 'rgba(3,47,104)' }}>Candidates</h2>
        <p style={{ fontSize: '1.2rem', textAlign: 'justify' }}>For candidates, we will provide premium opportunities to advance your career.</p>
        <p style={{ fontSize: '1.2rem', textAlign: 'justify' }}>We understand the unique structures within the firms we engage with, and match your experience, skill set, character and goals to them.</p>
      </Col>
      <Col md={4} className="order-1 order-md-2">
        <img src={people} alt="Construction Image" className="img-fluid" />
      </Col>
    </Row>
  </Container>
</Container>

  
  );
}

export default Home;
