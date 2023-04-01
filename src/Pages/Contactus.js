import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiMail } from "react-icons/fi";

function ContactUs() {
  return (
    <Container>
      <Row className="justify-content-center">
      <Col md={8} lg={6}>
          <h1>Contact Us</h1>
          <p>If you have any questions or comments, please email us:</p>
          <ul className="list-unstyled">
            <li>
              <FiMail className="me-2" />
              <a href="mailto:careers@estivagroup.com">careers@estivagroup.com</a>
            </li>
            <li>
              <FiMail className="me-2" />
              <a href="mailto:info@estivagroup.com">info@estivagroup.com</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
