import React, { useState } from 'react';
import { Form, Button, Row, Col, Offcanvas } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

function AddTraining(props) {

    const [open, setOpen] = React.useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('10:00');

    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: '',
        customer: '',

        // customer.firstname: '',
        // customer.lastname: '',
        // customer.city: '',
        // customer.email: '',
        // customer.phone: '',
    })

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        props.saveTraining({...training, date: `${training.date}:00.000+02:00`})
        handleClose();
    }

    const inputChanged = event => {
        setTraining({ ...training, [event.target.name]: event.target.value })
    };


    return (
        <div>
            <div>
                <Button variant="dark" onClick={handleClickOpen} style={{ height: '10', width: '106px', backgroundColor: '#5ea4e0', border: '1px solid #5ea4e0', paddingTop: '5px', alignItems: 'right', outline: 'none', marginTop: '10px' }}>
                    Add training
                </Button>

                <Offcanvas show={open} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Add Training</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Form open={open} onClose={handleClose}>
                            <Form.Group controlId="formDate">
                                <Form.Label>
                                    Date
                                    <Calendar
                                        onChange={setDate}
                                        value={date}
                                    />
                                    <TimePicker
                                        closeClock={true}
                                        // disableClock={true}
                                        onChange={setTime}
                                        value={time}
                                    />
                                </Form.Label>
                                <Form.Control
                                    value={training.date}
                                    onChange={inputChanged}
                                    name="date"
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group controlId="formDuration">
                                <Form.Label>Duration</Form.Label>
                                <Form.Control
                                    value={training.duration}
                                    onChange={inputChanged}
                                    name="duration"
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group controlId="formActivity">
                                <Form.Label >Activity</Form.Label>
                                <Form.Control
                                    value={training.activity}
                                    onChange={inputChanged}
                                    name="activity"
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group controlId="formName">
                                <Form.Label >First Name</Form.Label>
                                <Form.Control
                                    value={training.firstname}
                                    onChange={inputChanged}
                                    name="firstname"
                                    type="text"
                                />
                            </Form.Group>
                            <Form.Group controlId="formSurname">
                                <Form.Label >Surname</Form.Label>
                                <Form.Control
                                    value={training.lastname}
                                    onChange={inputChanged}
                                    name="surname"
                                    type="text"
                                />
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label >City </Form.Label>
                                    <Form.Control
                                        value={training.city}
                                        onChange={inputChanged}
                                        name="city"
                                        type="text"
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label >Phone</Form.Label>
                                    <Form.Control
                                        value={training.phone}
                                        onChange={inputChanged}
                                        name="phone"
                                        type="text"
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Group controlId="formEmail">
                                <Form.Label >Email</Form.Label>
                                <Form.Control
                                    value={training.email}
                                    onChange={inputChanged}
                                    name="email"
                                    type="text"
                                />
                            </Form.Group>

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

export default AddTraining;