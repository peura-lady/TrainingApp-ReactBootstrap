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
        props.addCustomer(training);
        handleClose();
    }

    const inputChanged = event => {
        setTraining({ ...training, [event.target.name]: event.target.value })
    };


    return (

        <div>
            <div>

                <Button variant="dark" onClick={handleClickOpen} style={{ marginLeft: '1320px', color: "#b0b7df", fontWeight: '600', fontSize: '20px', marginTop: '10px', padding: '15px', background:'#393a3b', height:'70px', width:'230px' }}>
                    Add a new training
                </Button>

                <Offcanvas show={open} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Add Training</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <Form open={open} onClose={handleClose}>
                            <Form.Group controlId="formDate">
                                <Form.Label value={training.date} onChange={inputChanged}>
                                    Date
                                    <Calendar
                                        onChange={setDate}
                                        value={date}
                                    />
                                    <TimePicker
                                    closeClock={true}
                                    disableClock={true}
                                        onChange={setTime}
                                        value={time}
                                    />
                                </Form.Label>
                            </Form.Group>

                            <Form.Group controlId="formDuration">
                                <Form.Label value={training.duration} onChange={inputChanged}>Duration</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>30 min</option>
                                    <option>45 min</option>
                                    <option>60 min</option>
                                    <option>90 min</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="formActivity">
                                <Form.Label value={training.activity} onChange={inputChanged}>Activity</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Zumba</option>
                                    <option>Gym Training</option>
                                    <option>Fitness</option>
                                    <option>Spinning</option>
                                    <option>Jogging</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group controlId="formName">
                                <Form.Label value={training.firstname} onChange={inputChanged}>First Name</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group controlId="formSurname">
                                <Form.Label value={training.lastname} onChange={inputChanged}>Surname</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formCity">
                                    <Form.Label value={training.city} onChange={inputChanged}>City</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>Flintsone</option>
                            </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formPhone">
                                    <Form.Label value={training.phone} onChange={inputChanged}>Phone</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group controlId="formEmail">
                                <Form.Label value={training.email} onChange={inputChanged}>Email</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Button type="submit" style={{color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background:'#393a3b', borderRadius: '5px', width:'140px' }} onClick={handleSave}>
                                Submit
                            </Button>

                            <Button style={{color: "#b0b7df", fontWeight: '600', fontSize: '18px', marginTop: '10px', padding: '15px', background:'#393a3b', borderRadius: '5px', width:'140px', marginLeft:'20px' }} onClick={handleClose}>Cancel</Button>
                        </Form>

                    </Offcanvas.Body>
                </Offcanvas>



            </div>
        </div>
    )
}

export default AddTraining;