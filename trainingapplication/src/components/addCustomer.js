import React from "react";
// import Button from "@restart/ui/esm/Button";
import { Form, Button, Row, Col, Dropdown } from 'react-bootstrap';

function AddCustomer() {

    // const [open, setOpen] = React.useState(false);

    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    })

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };

    // const handleSave = () => {
    //     props.addCustomer(customer);
    //     handleClose();
    // }

    // const inputChanged = event => {
    //     setCustomer({ ...customer, [event.target.name]: event.target.value })
    // };

    return (

        <div>
            <div>
                {/* <Button className="addCustomerBtn" style={{ marginLeft: '1370px', color: "#f0edef", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', backgroundColor: '#ad95ba', border: '1px solid #ad95ba', borderRadius: '5px' }} variant="outlined" onClick={handleClickOpen}>
                    Add new customer
                </Button> */}
                <Dropdown autoClose={false} outline="none">
                    <Dropdown.Toggle variant="success" id="dropdown-basic" className="addCustomerBtn" style={{ marginLeft: '1370px', color: "#f0edef", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', backgroundColor: '#ad95ba', border: '1px solid #ad95ba', borderRadius: '5px' }}>
                        Add new customer
                    </Dropdown.Toggle>

                    <Dropdown.Menu>

                        <Dropdown.Item>
                            {/* <Form open={open} onClose={handleClose}> */}
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formName">
                                        <Form.Label value={customer.firstname}>Name</Form.Label>
                                        <Form.Control autoFocus />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formSurname">
                                        <Form.Label value={customer.lastname}>Surname</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>


                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formStreet">
                                        <Form.Label value={customer.streetaddress}>Street Adress</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formPostCode">
                                        <Form.Label value={customer.postcode}>Post Code</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formCity">
                                        <Form.Label value={customer.city}>City</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>Flintsone</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formEmail">
                                        <Form.Label value={customer.email}>Email</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formPhone">
                                        <Form.Label value={customer.phone}>Phone</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>
                                
                                <Button variant="primary" type="submit" style={{ color: "#f0edef", fontWeight: '600', fontSize: '18px', padding: '15px', backgroundColor: '#ad95ba', border: '1px solid #ad95ba', borderRadius: '5px' }}>
                                    Submit
                                </Button>
                            </Form>
                        </Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>


            </div>
        </div>
    )
}

export default AddCustomer;