import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function EditCustomer(props) {
    const [customer, setCustomer] = useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone: '',
    })

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => {
        setCustomer({
            firstname: props.row.data.firstname,
            lastname: props.row.data.lastname,
            streetaddress: props.row.data.streetaddress,
            postcode: props.row.data.postcode,
            city: props.row.data.city,
            email: props.row.data.email,
            phone: props.row.data.phone,
        })
        setShow(true)
    }

    const handleSave = () => {
        props.editCustomer(props.row.value, customer)
        handleClose()
    }

    const inputChanged = (event) => {
        setCustomer({ ...customer, [event.target.name]: event.target.value })
    }

    return (
        <>
            <Button variant="outline-primary" onClick={handleShow} style={{ height: '10', marginLeft: '30px', width: '70px', backgroundColor: '#9cca81', border: '1px solid #9cca81', paddingTop: '5px', alignItems: 'right', outline: 'none', marginTop: '10px', color: 'fff' }}>
                Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit a customer </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form open={show} onClose={handleClose}>
                        <Row>
                            <Form.Group as={Col} controlId="formGridFirstName">
                                <Form.Label>First name: </Form.Label>
                                <Form.Control
                                    name="firstname"
                                    as="input"
                                    placeholder="First name"
                                    value={customer.firstname}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last name: </Form.Label>
                                <Form.Control
                                    name="lastname"
                                    placeholder="Last name"
                                    defaultValue={customer.lastname}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formGridAddress">
                            <Form.Label>Street address: </Form.Label>
                            <Form.Control
                                name="streetaddress"
                                placeholder="1234 Main St"
                                defaultValue={customer.streetaddress}
                                onChange={inputChanged}
                                type="text"
                            />
                        </Form.Group>

                        <Row>
                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Postcode: </Form.Label>
                                <Form.Control
                                    name="postcode"
                                    defaultValue={customer.postcode}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City: </Form.Label>
                                <Form.Control
                                    name="city"
                                    defaultValue={customer.city}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email: </Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    defaultValue={customer.email}
                                    onChange={inputChanged}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPhone">
                                <Form.Label>Phone: </Form.Label>
                                <Form.Control
                                    name="phone"
                                    defaultValue={customer.phone}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" onClick={handleSave} style={{ color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background: '#393a3b', borderRadius: '5px', width: '140px' }}>
                            Save
                        </Button>

                        <Button variant="outline-secondary" onClick={handleClose} style={{ color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background: '#393a3b', borderRadius: '5px', width: '140px', marginLeft: '20px' }}>
                            Cancel
                        </Button>

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default EditCustomer;