import React from 'react';
import './App.css';
import logo from './logo.png';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} alt="Octofit Logo" style={{ float: 'left', marginRight: '20px', height: '50px' }} />
                <h1>Welcome to Octofit Tracker</h1>
            </header>
            <nav>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    );
}

export default App;
