import React from 'react'
import CollapsibleExample from '../components/Navbar'
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';

const ProductsPage = () => {
  return (
    <>
        <CollapsibleExample/>
        <div className='mb-5'>
      <h2 className="hero-heading custom-text pt-3">Products</h2>
      <div className="px-5">
        <Row className='py-2'>
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
    <Footer/>
    </>
  )
}

export default ProductsPage