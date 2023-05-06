import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Home from './Home';

function Registration() {

  const [data, setData] = useState({});

  const handler = (e) => {
    if (e.target.name == 'title') e.target.value = e.target.value.toUpperCase();
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    
    if (Object.keys(data).length == 7) {
      const response = await fetch('http://localhost:5000/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const result = await response.json();
    }
    else {
      window.alert("Gand marao");
    }
  }

  return (
      <div className='Registration'>
        <form onSubmit={handleSubmit}>
              <h3 className='title'>Start a Campaign</h3>
              <div className='data'>
                <samp>Campaign Title *</samp>
                <input type='text' name='title' placeholder='Write a titles' onChange={handler}></input>
                <samp>Description *</samp>
                <input type='text' name='description' placeholder='Description' onChange={handler}></input>
                <samp>Story *</samp>
                <input type='text' name='story' placeholder='Write a story' onChange={handler}></input>
                <samp>Address *</samp>
                <input type='text' name='address' placeholder='account number' onChange={handler}></input>
                <div className='dif'>
                    <div className='dif1'>
                        <samp>Goal *</samp>
                        <input type='number' step='0.00001' name='eth' placeholder='Eth 0.50' onChange={handler}></input>
                    </div>
                    <div className='dif1'>
                        <samp>End Date *</samp>
                        <input type='date' name='date' onChange={handler}></input>
                    </div>
                </div>
                <samp>Campaign image *</samp>
                <input type='text' name='image' placeholder='Place image url of your campaign' onChange={handler}></input>
                <button type='submit'>Submit new campaign</button>
              </div>
      </form>
    </div>
  );
}

export default Registration;