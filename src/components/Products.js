import React from 'react';
import { Card } from 'react-bootstrap';
import './Products.css'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = () => {
  return (
    <div className='mb-5' id='products'>
      <h2 className="hero-heading custom-text">Products we offer</h2>
      <div className="px-5 py-3">
        <Row>
            <Col>
                <Card className="product-card">
                    <Card.Img variant="top" src="https://picsum.photos/200" />
                    <Card.Body>
                        <Card.Text className='hero-heading2 custom-text'>Product 1</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="product-card">
                    <Card.Img variant="top" src="https://picsum.photos/200" />
                    <Card.Body>
                        <Card.Text className='hero-heading2 custom-text'>Product 2</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card className="product-card">
                    <Card.Img variant="top" src="https://picsum.photos/200" />
                    <Card.Body>
                        <Card.Text className='hero-heading2 custom-text'>Product 3</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
      </div>
    </div>
  );
};

export default Products;