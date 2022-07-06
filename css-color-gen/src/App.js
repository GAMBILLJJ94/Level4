import './App.css';
import React from 'react'
import Gradient from './Gradient';

function App() {
  return (
    <div className="App">
      <h1 className="header" >CSS Gradient Code Generator</h1>
      <Gradient>
        <textarea className='gradientBox' readOnly />
        <textarea className='cssCode' readOnly />
      </Gradient>
    </div>
  );
}

export default App;
