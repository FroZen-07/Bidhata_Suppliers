import React from 'react'
import CollapsibleExample from '../components/Navbar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container ,Image} from 'react-bootstrap';
import Footer from '../components/Footer';

const ProductsPage = () => {
  return (
    <>
        <CollapsibleExample/>
        <Container>
        <h2 className="hero-heading custom-text pt-3">Products</h2>
            <Row className='py-2'>
                <Col xs={12} md={4}>
                <Image src='https://picsum.photos/200' thumbnail className='d-block mx-auto'/>
                <h6 className='pt-2 text-center'>Product 1</h6>
                </Col>
                <Col xs={12} md={4}>
                <Image src='https://picsum.photos/200' thumbnail className='d-block mx-auto'/>
                <h6 className='pt-2 text-center'>Product 1</h6>
                </Col>
                <Col xs={12} md={4}>
                <Image src='https://picsum.photos/200' thumbnail className='d-block mx-auto'/>
                <h6 className='pt-2 text-center'>Product 1</h6>
                </Col>
            </Row>

            <Row className='py-2'>
                <Col xs={12} md={4}>
                <Image src='https://picsum.photos/200' thumbnail className='d-block mx-auto'/>
                <h6 className='pt-2 text-center'>Product 1</h6>
                </Col>
                <Col xs={12} md={4}>
                <Image src='https://picsum.photos/200' thumbnail className='d-block mx-auto'/>
                <h6 className='pt-2 text-center'>Product 1</h6>
                </Col>
                <Col xs={12} md={4}>
                <Image src='https://picsum.photos/200' thumbnail className='d-block mx-auto'/>
                <h6 className='pt-2 text-center'>Product 1</h6>
                </Col>
            </Row>
        </Container>
   
    <Footer/>
    </>
  )
}

export default ProductsPage