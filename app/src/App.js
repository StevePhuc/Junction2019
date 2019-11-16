import React, { useState } from 'react';
import logo from './junction.png';
import businessFinland from './businessFinland.png';
import './App.css';
import Bottom from './components/Bottom'
import Home from './components/Home'
import Map from './components/Map'
import Location from './components/Location'

function App() {

  const [tab, setTab] = useState(0)
  return (
    <div className="App">
      {tab === 0 &&
        <Home />
      }
      {tab === 1 &&
        <Map />
      }
      {tab === 2 &&
        <Location />
      }
      <Bottom setTab={setTab} />
    </div>
  );
}

export default App;
