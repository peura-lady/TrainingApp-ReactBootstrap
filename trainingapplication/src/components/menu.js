import React from 'react';

import { Nav, Container, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Dashboard from './dashboard';
import ForCustomers from './forcustomer';
import ForTrainers from './fortrainer';
import Calendar from './calendar';
import Stats from './stats';

import Home from 'react-bootstrap-icons/dist/icons/house-door'
import Activity from 'react-bootstrap-icons/dist/icons/activity';
import Schedule from 'react-bootstrap-icons/dist/icons/calendar2-date';
import Customer from 'react-bootstrap-icons/dist/icons/person-circle';
import Statsistics from 'react-bootstrap-icons/dist/icons/bar-chart-line'

function Menu() {

    return(
        <div>
             <Router>
              <div>
                <Navbar>
                  <Container className="menu-style">
                    <Nav.Link as={Link} to={'/dashboard'}> Dashboard <Home />
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/fortrainer'}> Customers <Customer />
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/forcustomer'}> Trainings <Activity />
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/calendar'}> Calendar <Schedule />
                    </Nav.Link>
                    <Nav.Link as={Link} to={'/stats'}> Statistic <Statsistics />
                    </Nav.Link>
                  </Container>
                  </Navbar>
                  <br />

              </div>

              <div>
                  
              <Routes>
                <Route exact path="/" element={<Dashboard />}></Route>
                <Route  path="/fortrainer" element={<ForTrainers />}></Route>
                <Route  path="/forcustomer" element={<ForCustomers />}></Route>
                <Route  path="/calendar" element={<Calendar />}></Route>
                <Route  path="/stats" element={<Stats />}></Route>
                <Route  render={() => <h1> Page not found</h1>} />
                </Routes>
              </div>

            </Router>
        </div>
    )
}

export default Menu;