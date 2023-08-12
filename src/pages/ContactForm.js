import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import CollapsibleExample from '../components/Navbar';
import Footer from '../components/Footer';

function ContactForm() {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        'Phone Number': '',
        Message: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = 'https://sheet2api.com/v1/ziuNQ2ETqW1D/website-shop-demo/Sheet1';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const responseData = await response.json();
            console.log('Success:', responseData);

            setShowToast(true); // Show the toast on successful submission
            setTimeout(() => setShowToast(false), 5000);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
      <>
      <CollapsibleExample/>
      <h2 className="custom-text text-center py-3">Get Quotation</h2>
      <Form onSubmit={handleSubmit} >
      <div className="container" style={{ marginRight: 'auto', marginLeft: 'auto' }}>
      <Toast className='mx-auto' show={showToast} onClose={() => setShowToast(false)} delay={5000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Success</strong>
                </Toast.Header>
                <Toast.Body>Form submitted successfully!</Toast.Body>
      </Toast>
        <div className="row">
            <Form.Group controlId="Name" className="col-md-6 mx-auto py-1">
                <Form.Label className='fw-bold'>Name</Form.Label>
                <Form.Control
                    type="text"
                    name="Name"
                    placeholder="Name"
                    value={formData.Name}
                    onChange={handleChange}
                />
            </Form.Group>
            </div>
            <div className="row">
            <Form.Group controlId="Email" className="col-md-6 mx-auto py-1">
                <Form.Label className='fw-bold'>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="Email"
                    placeholder="Email"
                    value={formData.Email}
                    onChange={handleChange}
                />
            </Form.Group>
        </div>
        <div className="row">
            <Form.Group controlId="Phone" className="col-md-6 mx-auto py-1">
                <Form.Label className='fw-bold'>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    name="Phone Number"
                    placeholder="Phone Number"
                    value={formData['Phone Number']}
                    onChange={handleChange}
                />
            </Form.Group>
            </div>
        <div className="row">
            <Form.Group controlId="Message" className="col-md-6 mx-auto py-1">
                <Form.Label className='fw-bold'>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={4}
                    name="Message"
                    placeholder="Message"
                    value={formData.Message}
                    onChange={handleChange}
                />
            </Form.Group>
        </div>
        <div className='py-3 text-center'>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </div>
        </div>
      </Form>
      <Footer/>
      </>
        
    );
}

export default ContactForm;
