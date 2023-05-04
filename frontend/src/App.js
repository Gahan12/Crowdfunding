import logo from './logo.svg';
import Sidebar from './My Components/Sidebar';
import Home from './My Components/Home';
import Registration from './My Components/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './My Components/Details';
import React, { useEffect, useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [id, useId] = useState("");

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home users={users} setUsers={setUsers} useId={useId} />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Details' element={<Details users={users} id={id} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
