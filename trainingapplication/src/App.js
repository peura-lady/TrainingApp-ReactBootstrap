import './App.css';
import React, { useState } from 'react';

import { Button, Offcanvas, Tab, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Dashboard from './components/dashboard';
import ForCustomers from './components/forcustomer';
import ForTrainers from './components/fortrainer';
import Calendar from './components/calendar';
import Stats from './components/stats';

import Home from 'react-bootstrap-icons/dist/icons/house-door'
import Activity from 'react-bootstrap-icons/dist/icons/activity';
import Schedule from 'react-bootstrap-icons/dist/icons/calendar2-date';
import Customer from 'react-bootstrap-icons/dist/icons/person-circle';
import Statsistics from 'react-bootstrap-icons/dist/icons/bar-chart-line'
// import City from '.../react-bootstrap-icons/dist/icons/geo-alt';
// import Email from '.../react-bootstrap-icons/dist/icons/envelope-open';
// import Phone from '.../react-bootstrap-icons/dist/icons/telephone';
// import Time from 'react-bootstrap-icons/dist/icons/stopwatch';

function App() {

  const [menu, setMenu] = useState(false);
  const handleClose = () => setMenu(false);
  const handleShow = () => setMenu(true);


  return (
    <div>



      <div style={{ backgroundColor: '#565e69', width: '100%', height: '100px' }}>

        <Button variant="primary" onClick={handleShow}
          style={{ backgroundColor: '#877e8f', width: '175px', height: '100px', border: '2px solid #877e8f', fontSize: '23px', fontWeight: '700', outline: 'none' }}>
          Menu
        </Button>

        <ForTrainers />
        <ForCustomers />


        <Offcanvas show={menu} onHide={handleClose} style={{ backgroundColor: '#565e69' }}>
          <Offcanvas.Header closeButton >

            <Offcanvas.Title
              style={{ color: '#bd9cd9', fontSize: '27px', fontWeight: '700', paddingTop: '19px', paddingLeft: '34px', height: '84px', width: '275px', borderBottom: '1px solid #bd9cd9' }}>
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>

            <Tab.Container id="left-tabs-example">

              <Row>
                <Col md={6}>

                  <Nav variant="pills" className="flex-column">

                    <Nav.Item >
                      <Nav.Link eventKey="first" variant="secondary"
                        style={{ cursor: "pointer", color: "#877e8f", ariaSelected: 'false', fontSize: '24px', fontWeight: '400', paddingTop: '50px', paddingLeft: '20px', width: '400px' }}>
                        Dashboard  <Home />
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="second"
                        style={{ cursor: "pointer", color: "#877e8f", fontSize: '24px', fontWeight: '400', paddingTop: '50px', paddingLeft: '20px', width: '400px' }} >
                        Customers  <Customer />
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="third"
                        style={{ cursor: "pointer", color: "#877e8f", fontSize: '24px', fontWeight: '400', paddingTop: '50px', paddingLeft: '20px', width: '400px' }} >
                        Trainings <Activity />
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="fourth"
                        style={{ cursor: "pointer", color: "#877e8f", fontSize: '24px', fontWeight: '400', paddingTop: '50px', paddingLeft: '20px', width: '400px' }} >
                        Calendar <Schedule />
                      </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                      <Nav.Link eventKey="fifth"
                        style={{ cursor: "pointer", color: "#877e8f", fontSize: '24px', fontWeight: '400', paddingTop: '50px', paddingLeft: '20px', width: '400px' }} >
                        Statistics <Statsistics />
                      </Nav.Link>
                    </Nav.Item>

                  </Nav>
                </Col>

                <Col md={6}>
                  <Tab.Content>

                    <Tab.Pane eventKey="first" >

                      <Dashboard />

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                      <ForTrainers />

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">

                      <ForCustomers />

                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">

                      <Calendar />

                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">

                      <Stats />

                    </Tab.Pane>

                  </Tab.Content>
                </Col>


              </Row>
            </Tab.Container>


          </Offcanvas.Body>
        </Offcanvas>



      </div>
    </div>


  );
}

export default App;
