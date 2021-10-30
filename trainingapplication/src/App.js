import './App.css';
import React, { useState } from 'react';

import { Button, Offcanvas, CloseButton} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
// import Dashboard from './components/dashboard';
// import ForCustomers from './components/forcustomer';
// import ForTrainers from './components/fortrainer';
// import Calendar from './components/calendar';
// import Stats from './components/stats';


function App() {

  const [menu, setMenu] = useState(false);
  const handleClose = () => setMenu(false);
  const handleShow = () => setMenu(true);
  return (

    <div style={{ backgroundColor: '#565e69', width: '100%', height: '100px' }}>

      <Button variant="primary" onClick={handleShow}
        style={{ backgroundColor: '#97b0d1', width: '175px', height: '100px', border: '2px solid #97b0d1', fontSize: '23px', fontWeight: '700', outline:'none' }}>
        Menu
      </Button>

      <Offcanvas show={menu} onHide={handleClose} style={{ backgroundColor: '#565e69' }}>
        <Offcanvas.Header closeButton >

          <Offcanvas.Title style={{ color: '#fff', fontSize: '27px', fontWeight: '700', paddingTop: '30px', paddingLeft: '20px' }}>
            Welcome!
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

    </div>


    // <div className="App">
    //   {/* <ForTrainers /> */}
    //   <ForCustomers />
    // </div>
  );
}

export default App;
