import React from 'react'
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';

function App() {
  return (
    <>
      <Navbar title="Textutility" about='Disable'/>
      <Textarea title="Enter Your Text Here :"></Textarea>
      <About/>
    </>
  );
}

export default App;
