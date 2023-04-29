import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from "./LoginPage";
import Dashboard from './Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [flights, setFlights] = useState([]);

  const handleLogin = (email, password) => {
    // perform login logic here
    // set loggedIn to true if login is successful
    if (email === "admin@gmail.com" && password === "admin") {
      setLoggedIn(true);
  
      // dummy data for flights
      setFlights([
        { flightNumber: 'AA1234', origin: 'New York (JFK)', arrivalTime: '10:30 AM', status: 'On Time', destination: 'San Francisco (SFO)', departureTime: '1:00 PM'},
        { flightNumber: 'BA4567', origin: 'London (LHR)', arrivalTime: '11:45 AM', status: 'Delayed', destination: 'Hong Kong (HKG)', departureTime: '1:30 PM' },
        { flightNumber: 'DL7890', origin: 'Los Angeles (LAX)', arrivalTime: '12:15 PM', status: 'On Time', destination: 'Miami (MIA)', departureTime: '2:00 PM' },
      ]);
    } else {
      // handle incorrect email or password
      alert("Incorrect email or password");
    }
  };
  

  const handleLogout = () => {
    // clear any authentication token or state
    // navigate back to the login page
    setLoggedIn(false);
  };

  
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            {loggedIn ? (
              <Route path="/dashboard/*" element={<Dashboard flights={flights} handleLogout={handleLogout} />} />
            ) : (
              <Route path="/" element={<LoginPage handleLogin={handleLogin} />} />
            )}
          </Routes>
        </header>
      </div>
    </Router>
  );
  
  
};

export default App;
