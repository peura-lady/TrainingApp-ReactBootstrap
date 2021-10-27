import './App.css';
// import Dashboard from './components/dashboard';
import ForCustomers from './components/forcustomer';
import ForTrainers from './components/fortrainer';
// import Calendar from './components/calendar';
// import Stats from './components/stats';


function App() {
  return (
    <div className="App">
      <ForTrainers />
      <ForCustomers />
    </div>
  );
}

export default App;
