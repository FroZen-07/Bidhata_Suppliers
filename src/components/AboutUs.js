import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    
      <Container fluid className="hero-section w-75 bg-white" id='about-us'>
        <Row>
          <Col>
            <h1 className="hero-heading custom-text">Welcome to Our Website</h1>
            <p className="hero-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula felis eget nisl commodo sodales. Nulla facilisi. Aenean
              vestibulum fermentum mauris, vel sagittis elit. Sed sed
              ullamcorper orci, et fermentum felis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula felis eget nisl commodo sodales. Nulla facilisi. Aenean
              vestibulum fermentum mauris, vel sagittis elit. Sed sed
              ullamcorper orci, et fermentum felis.
            </p>
            <Button variant="outline-primary" className="hero-button custom-text">
              Learn More
            </Button>
          </Col>
        </Row>
      </Container>

  );
};

export default HeroSection;
