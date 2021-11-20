import React from "react";
import { Form, Button, Row, Col, Offcanvas } from 'react-bootstrap';

function AddCustomer(props) {

    const [open, setOpen] = React.useState(false);

    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.addCustomer(customer);
        handleClose();
    }

    const inputChanged = event => {
        // setCustomer({ ...customer, [event.target.name]: event.target.value })
        setCustomer({ ...customer, [event.target.name]: event.target.value })
    };


    return (

        <div>
            <div>

                <Button variant="outlined" onClick={handleClickOpen} style={{ marginLeft: '1370px', color: "#f0edef", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', backgroundColor: '#ad95ba', border: '1px solid #ad95ba', borderRadius: '5px' }}>
                    Add a new customer
                </Button>

                <Offcanvas show={open} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Customer</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        <Form open={open} onClose={handleClose}>
                    
                        <Form.Group controlId="formName">
                            <Form.Label value={customer.firstname} onChange={inputChanged}>Name</Form.Label>
                            <Form.Control autoFocus />
                        </Form.Group>

                        <Form.Group controlId="formSurname">
                            <Form.Label value={customer.lastname} onChange={inputChanged}>Surname</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    

                    <Form.Group controlId="formStreet">
                            <Form.Label value={customer.streetaddress} onChange={inputChanged}>Street Adress</Form.Label>
                            <Form.Control />
                        </Form.Group>

                    <Row className="mb-3">

                        <Form.Group as={Col} controlId="formPostCode">
                            <Form.Label value={customer.postcode} onChange={inputChanged}>Post Code</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formCity">
                            <Form.Label value={customer.city} onChange={inputChanged}>City</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Flintsone</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formEmail">
                            <Form.Label value={customer.email} onChange={inputChanged}>Email</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formPhone">
                            <Form.Label value={customer.phone} onChange={inputChanged}>Phone</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit" style={{ color: "#f0edef", fontWeight: '600', fontSize: '18px', padding: '15px', backgroundColor: '#ad95ba', border: '1px solid #ad95ba', borderRadius: '5px', width: '91px' }} onClick={handleSave}>
                        Submit
                    </Button>
                    <Button style={{ color: "#f0edef", fontWeight: '600', fontSize: '18px', padding: '15px', backgroundColor: '#ad95ba', border: '1px solid #ad95ba', borderRadius: '5px', marginLeft: '20px', width: '91px' }} onClick={handleClose}>Cancel</Button>
                </Form>

        </Offcanvas.Body>
      </Offcanvas>



            </div>
        </div>
    )
}

export default AddCustomer;