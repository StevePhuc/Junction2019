import React from 'react';
import logo from './junction.png';
import businessFinland from './businessFinland.png';
import './App.css';
import Bottom from './components/Bottom'

function App() {
  return (
    <div className="App">
      <header className="main">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.hackjunction.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Junction 2019
        </a>
        <img src={businessFinland} className="businessFinland-logo" alt="logo" />
        <p>
          The <code>DNA</code> of Helsinki.
        </p>
      </header>
      <Bottom />
    </div>
  );
}

export default App;
