import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const GetInTouch = () => {
  return (
    <Container id="get-in-touch">
      <h2 className='hero-heading custom-text'>Get in Touch</h2>
      <div className="px-5 py-3">
        <Row>
            <Col>
            <div className="contact-info text-center">
            <FaMapMarkerAlt className="contact-icon custom-text " size={70}/>
            <h4 className='pt-3'>Location</h4>
            <p>Your Address Here</p>
          </div>
            </Col>
            <Col>
            <div className="contact-info text-center">
            <FaPhone className="contact-icon custom-text" size={70}/>
            <h4 className='pt-3'>Contact</h4>
            <p>Phone: +123456789</p>
          </div>
            </Col>
            <Col>
          <div className="contact-info text-center">
            <FaEnvelope className="contact-icon custom-text " size={70}/>
            <h4 className='pt-3'>Email</h4>
            <p>Email: info@example.com</p>
          </div>
        </Col>
        </Row>
      </div>
    </Container>
  );
};

export default GetInTouch;
