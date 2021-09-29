import React from 'react';
import './App.css';
import { Game } from './components/Game';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Game />
    </div>
  );
}


export default App;
