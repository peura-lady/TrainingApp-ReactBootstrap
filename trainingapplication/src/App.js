import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './components/menu';

// import City from '.../react-bootstrap-icons/dist/icons/geo-alt';
// import Email from '.../react-bootstrap-icons/dist/icons/envelope-open';
// import Phone from '.../react-bootstrap-icons/dist/icons/telephone';
// import Time from 'react-bootstrap-icons/dist/icons/stopwatch';

function App() {

  return (
    <div>
      <div class="bg-dark bg-gradient">
        <Menu />
      </div>
    </div>
  );
}

export default App;
