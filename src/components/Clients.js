import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../index.css'
import { FaTools, FaUsers, FaBriefcase } from 'react-icons/fa';

function Home() {
  return (
    <div className="my-container" style={{  }}>
    <Container>
      <Row className="justify-content-center">
        <Col xs="12" md="8" lg="6">
          <h1 className="text-center mb-5 heading-blue" style={{ color: '#308dd9', textDecoration: 'underline' }}>Building Your Dream Career in Construction</h1>
        </Col>
      </Row>
      <Row className="mt-0">
        <Col xs="12" md="6" lg="4">
          <div className="text-center mb-5">
            <FaTools className="mb-3 darkblue" size={64} />
            <h2 className="darkblue mb-3">Engineering &amp; Building Envelope</h2>
            <p className="subtitle">Estiva specializes in providing engineering, building envelope and construction recruitment. Our motto reflects our commitment: Building-Talent.</p>
          </div>
        </Col>
        <Col xs="12" md="6" lg="4">
          <div className="text-center mb-5">
            <FaUsers className="mb-3 darkblue" size={64} />
            <h2 className="darkblue mb-3">Clients</h2>
            <p className="subtitle">As subject matter experts, we leverage our decades of industry experience to bring you the best quality candidates possible. We have extensive knowledge and understanding of the building envelope and construction markets, throughout North America. With our industry insight, and extensive candidate database, we have the resources to building your team.</p>
          </div>
        </Col>
        <Col xs="12" md="6" lg="4">
          <div className="text-center mb-5 ">
            <FaBriefcase className="mb-3 darkblue" size={64} />
            <h2 className="darkblue mb-3 ">Candidates</h2>
            <p className="subtitle">For candidates, we will provide premium opportunities to advance your career. We understand the unique structures within the firms we engage with, and match your experience, skill set, character and goals to them.</p>
          </div>
        </Col>
      </Row>
      
    </Container>
  </div>
  );
}

export default Home;
