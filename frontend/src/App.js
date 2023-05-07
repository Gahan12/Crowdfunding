import logo from './logo.svg';
import Sidebar from './My Components/Sidebar';
import Home from './My Components/Home';
import Registration from './My Components/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './My Components/Details';
import React, { useEffect, useState } from 'react';
import abi from './Transaction.json';
import { ethers } from "ethers";

function App() {

  const [users, setUsers] = useState([]);
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract:null
  });

  const connectWallet = async () => {
    const contractAddress = "0xB1cfb8e6717BB7104f5b4DE9f259B5F33d3BE700";
    const contractABI = abi.abi;
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });
      }
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractABI, signer);
      setState({ provider, signer, contract });
    }
    catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    connectWallet();
  }, []);

  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home users={users} setUsers={setUsers} />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Details' element={<Details users={users} state={state} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
