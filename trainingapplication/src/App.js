import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './components/menu';

function App() {

  return (
    <div>
      <div className="bg-dark bg-gradient">
        <Menu />
      </div>
    </div>
  );
}

export default App;
