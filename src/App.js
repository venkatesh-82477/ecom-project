import React from 'react';
import './App.css';
import Appbar from './components/Appbar'
import Routers from './Routes/Routers'

function App() {
  return (
    <div className="App">
     <Appbar/>
     <Routers/>
    </div>
  );
}

export default App;
