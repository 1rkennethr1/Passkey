import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import PMatch from './components/PMatch';

const clickHandlerTwo = () =>{
  alert("Enter PIN")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <PMatch value="5" handleClick={clickHandlerTwo}></PMatch>
      </header>
    </div>
  );
}

export default App;
