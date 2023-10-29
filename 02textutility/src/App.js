import React from 'react'
import { useState } from 'react'
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import Alert from './component/Alert';

function App() {
  const [mode, setmode] = useState('light')
  const handleDarkMode = () => {
    
    if (mode=== 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
    }else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
    }

  }

  return (
    <>
      <Navbar title="Textutility" about='Disable' mode = {mode} toggleMode={handleDarkMode} />
      <Alert/>
      <Textarea title="Enter Your Text Here :" mode ={mode} ></Textarea>
      {/* <About /> */}
    </>
  );
}

export default App;
