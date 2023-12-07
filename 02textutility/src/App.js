import React from 'react'
import { useState } from 'react'
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import Alert from './component/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const handleDarkMode = (e) => {


    if (mode === 'light') {
      setmode(e);
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is actived", "success");
    } else {
      setmode(e)
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is actived", "success");
    }

  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000);
  }

  return (
    <>
      <Navbar title="Textutility" about='Disable' mode={mode} handleDarkMode={handleDarkMode} />
      <Alert alert={alert} />
      <Textarea showAlert={showAlert} title="Enter Your Text Here :" mode={mode} ></Textarea>
      <About />
    </>
  );
}

export default App;
