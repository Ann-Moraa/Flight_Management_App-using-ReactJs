// Dashboard.js

import React, { useState, useEffect } from 'react';

const Dashboard = ({ flights }) => {
  const [loggedIn, setLoggedIn] = useState(true);

  const handleLogout = () => {
    console.log('Logging out...');
    localStorage.removeItem('authToken');
    setLoggedIn(false);
    window.location.href = '/login'; // navigate to the login page
  };
  

  useEffect(() => {
    // Check if the user is logged in on mount
    const authToken = localStorage.getItem('authToken');
    if (!authToken) {
      setLoggedIn(false);
    }
  }, []);

  return (
    <div className="container">
      {!loggedIn && <button onClick={handleLogout}>Logout</button>}
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
