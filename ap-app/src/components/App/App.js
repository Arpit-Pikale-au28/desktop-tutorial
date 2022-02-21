import React, { useState } from 'react';

import './App.css';
import Dashboard from '../Dashboard/Dashboard';
import Login from '../Login/Login';
import Preferences from '../Preferences/Preferences';
import Reports from '../Reports';
import Faculty_Login from '../Faculty_Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Student Examination Portal </h1>
            <Dashboard />
            <Preferences />
            <Reports />
            <Faculty_Login />

    </div>
  );
}

export default App;
