import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../App.css';
import Details from './Details';
import { Link } from 'react-router-dom';

function Home(props) {

  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch('http://localhost:5000/show', {
      method: 'GET',
    });
    const result = await response.json();
    console.log(result);
    props.setUsers(result);
  }

  useEffect(() => {
    getUser();
  }, []);

  const calculateDaysLeft = (targetDate) => {
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const diffDays = Math.round((targetDate.getTime() - currentDate.getTime()) / oneDay);
    console.log(targetDate,currentDate);
    return diffDays;
  }
/*
  useEffect(() => {
    getData().then(date => {
      setDatabaseDate(new Date(date));
    });
  }, []);
  useEffect(() => {
    if (databaseDate) {
      const currentDate = new Date();
      const differenceInMs = databaseDate.getTime() - currentDate.getTime();
      const remainingDays = Math.round(differenceInMs / (1000 * 60 * 60 * 24));
      setRemainingDays(remainingDays);
    }
  }, [databaseDate]);
*/
  return (
    <div className='Home'>
      {props.users.map((val, key) => {
        const daysLeft = calculateDaysLeft(new Date(val.date));
        return (
          <Link to='/Details' state={{
            user: {
              title: val.title,
              story: val.story,
              eth: val.eth,
              date: val.date,
              image: val.image
          }}} key={key}>
          <div className='block' key={key}>
            <div className='image'>
              <img src={val.image} />
            </div>
            <div className='t'>
              {val.title}
            </div>
            <div className='common'>
              <div className='eth'>
                <li>{val.eth}</li>
                <li>Eth</li>
              </div>
              <div className='date'>
                <li>20</li>
                <li>Days Left</li>
              </div>
            </div>
            </div>
            </Link>
        )
      })}
    </div>
  );
}

export default Home;
