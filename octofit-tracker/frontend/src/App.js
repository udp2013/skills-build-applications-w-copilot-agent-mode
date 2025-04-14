import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="Octofit Logo" />
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <header className="App-header">
        <h1>Welcome to Octofit Tracker</h1>
        <p>Track your fitness activities and compete with others!</p>
      </header>
    </div>
  );
}

export default App;
