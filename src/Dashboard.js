import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = ({ flights }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Logging out...');
    setLoggedIn(false);
    localStorage.removeItem('authToken');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  useEffect(() => {
    if (!loggedIn) {
      console.log('Navigating to login page...');
      navigate('/login', { replace: true });
    }
  }, [loggedIn, navigate]);

  return (
    <div className="container">
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleLoginClick}>Go to Login</button>

      <h3>Flights Arriving</h3>
      <table className="table">
        <thead>
          <tr>
            <th style={{ padding: "8px" }}>Flight Number</th>
            <th style={{ padding: "8px" }}>Origin</th>
            <th style={{ padding: "8px" }}>Arrival Time</th>
            <th style={{ padding: "8px" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.origin}</td>
              <td>{flight.arrivalTime}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Flights Departing</h3>
      <table>
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Destination</th>
            <th>Departure Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {flights.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.flightNumber}</td>
              <td>{flight.destination}</td>
              <td>{flight.departureTime}</td>
              <td>{flight.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
