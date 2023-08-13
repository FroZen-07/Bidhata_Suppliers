import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const OurPartners = ({ logos }) => {
  return (
    <Container id="partners" className='mb-5'>
      <h2 className='hero-heading custom-text'>Our Partners</h2>
      <div className="px-5 py-3">
        <Row>
            <Col>
            <div className="contact-info text-center">
            <Image src='https://picsum.photos/200'/>
          </div>
            </Col>
            <Col>
            <div className="contact-info text-center">
            <Image src='https://picsum.photos/200'/>
           
          </div>
            </Col>
            <Col>
          <div className="contact-info text-center">
          <Image src='https://picsum.photos/200'/>
          </div>
        </Col>
        <Col>
          <div className="contact-info text-center">
          <Image src='https://picsum.photos/200'/>
          </div>
        </Col>
        </Row>
      </div>
    </Container>
  );
};

export default OurPartners;
