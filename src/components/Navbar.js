import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top">
      <Container>
        <Navbar.Brand href="/" className="custom-text hero-heading2">
          Bidhata Suppliers
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='me-auto'> {/* For Gap */}</Nav>
          <Nav className="justify-content-between align-items-center">
          <Nav.Link className="custom-text">
            <Link to="/" style={{textDecoration: 'none'}}>
              Home
            </Link>
            </Nav.Link>
            <Nav.Link href="#about-us" className="custom-text" style={{textDecoration: 'none'}}>
              About Us
            </Nav.Link>
            <Nav.Link href="#products" className="custom-text" style={{textDecoration: 'none'}}>
              Products
            </Nav.Link>
            <Nav.Link className="custom-text ml-auto">
            <Link to= "/get-quotation">
              <Button variant="outline-primary" className='custom-text'>Get Quotation</Button>
            </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default CollapsibleExample;