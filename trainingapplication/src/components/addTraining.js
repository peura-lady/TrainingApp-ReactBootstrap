import React, { useState } from 'react'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function AddTraining(props) {
      const [training, setTraining] = useState({
        date: '',
        activity: '',
        duration: '',
        customer: 'link.0.href',
      })

    //   const [show, setShow] = useState(false)

    //   const handleClose = () => setShow(false)
    //   const handleShow = () => setShow(true)

    const [show, setShow] = useState(false);
    // const [training, setTraining] = useState({ date: '', activity: '', duration: '', customer: '' });

    const handleShow = () => {
        setTraining({ ...training, customer: props.customer })
        // setTraining({...training, customer: props.customer.link[0].href})
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const inputChanged = (event) => {
        setTraining({ ...training, [event.target.name]: event.target.value })
    }

    //   const handleSave = () => {
    //       props.saveTraining({...training, date: `${training.date}:00.000+02:00`})
    //       handleClose();
    //   }

    const handleSave = () => {
        props.addTraining(props.row.data.customer, training)
        handleClose()
    }

    return (
        <>
            <Button onClick={handleShow} style={{ height: '10', width: '119px', backgroundColor: '#5ea4e0', border: '1px solid #5ea4e0', paddingTop: '5px', alignItems: 'right', outline: 'none', marginTop: '10px' }}>
                Add Training
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a training</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form open={show} onClose={handleClose}>
                        <Row>
                            <Form.Group as={Col} controlId="formGridDate">
                                <Form.Label>Date: </Form.Label>
                                <Form.Control
                                    name="date"
                                    as="input"
                                    placeholder="Date"
                                    value={training.date}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>

                            <Form.Group controlId="formGridDuration">
                                <Form.Label>Duration: </Form.Label>
                                <Form.Control
                                    name="duration"
                                    placeholder="min"
                                    defaultValue={training.duration}
                                    onChange={inputChanged}
                                    type="text"
                                />
                            </Form.Group>
                        </Row>

                        <Form.Group as={Col} controlId="formGridActivity">
                            <Form.Label>Activity: </Form.Label>
                            <Form.Control
                                name="activity"
                                placeholder="Activity"
                                defaultValue={training.activity}
                                onChange={inputChanged}
                                type="text"
                            />
                        </Form.Group>

                        <br />

                        <Button variant="primary" onClick={handleSave} style={{ color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background: '#393a3b', borderRadius: '5px', width: '140px' }}>
                            Save
                        </Button>
                        <Button variant="outline-secondary" onClick={handleClose} style={{ color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background: '#393a3b', borderRadius: '5px', width: '140px', marginLeft: '20px' }}>
                            Cancel
                        </Button>
                        {'  '}

                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddTraining