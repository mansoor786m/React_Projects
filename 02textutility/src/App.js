import React from 'react'
import { useState } from 'react'
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';

function App() {
  const [mode, setmode] = useState('light')
  const handleDarkMode = () => {
    
    if (mode=== 'light') {
      setmode('dark')
    }else{
      setmode('light')
    }

  }

  return (
    <>
      <Navbar title="Textutility" about='Disable' mode = {mode} toggleMode={handleDarkMode} />
      <Textarea title="Enter Your Text Here :" mode ={mode} ></Textarea>
      <About />
    </>
  );
}

export default App;
