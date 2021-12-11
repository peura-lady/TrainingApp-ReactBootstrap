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
        setCustomer({ ...customer, [event.target.name]: event.target.value })
    };

    return (
        <div>
            <div>
                <Button variant="dark" onClick={handleClickOpen} style={{ marginLeft: '1390px', color: "#b0b7df", fontWeight: '600', fontSize: '20px', marginTop: '10px', padding: '15px', background: '#393a3b', height: '70px', width: '230px' }}>
                    Add a new customer
                </Button>

                <Offcanvas show={open} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Add Customer</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form open={open} onClose={handleClose}>
                            <Form.Group controlId="formName">
                                <Form.Label >Name</Form.Label>
                                <Form.Control autoFocus
                                    name="firstname"
                                    value={customer.firstname}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group controlId="formSurname">
                                <Form.Label >Surname</Form.Label>
                                <Form.Control
                                    name="lastname"
                                    type="text"
                                    value={customer.lastname}
                                    onChange={inputChanged}
                                />
                            </Form.Group>
                            <Form.Group controlId="formStreet">
                                <Form.Label >Street Adress</Form.Label>
                                <Form.Control
                                    name="streetaddress"
                                    type="text"
                                    value={customer.streetaddress}
                                    onChange={inputChanged}
                                />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formPostCode">
                                    <Form.Label >Post Code</Form.Label>
                                    <Form.Control
                                        name="postcode"
                                        type="text"
                                        value={customer.postcode}
                                        onChange={inputChanged}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        name="city"
                                        type="text"
                                        value={customer.city}
                                        onChange={inputChanged}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        name="email"
                                        type="text"
                                        value={customer.email}
                                        onChange={inputChanged}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label >Phone</Form.Label>
                                    <Form.Control
                                        name="phone"
                                        type="text"
                                        value={customer.phone}
                                        onChange={inputChanged}
                                    />
                                </Form.Group>
                            </Row>
                            <Button type="submit" style={{ color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background: '#393a3b', borderRadius: '5px', width: '140px' }} onClick={handleSave}>
                                Submit
                            </Button>
                            <Button style={{ color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background: '#393a3b', borderRadius: '5px', width: '140px', marginLeft: '20px' }} onClick={handleClose}>Cancel</Button>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>
    )
}

export default AddCustomer;