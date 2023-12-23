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
    setmode(e);

    if (e==='light') {
      console.log(e)
      document.body.style.backgroundColor = '#ecf0f1';
      showAlert("Light mode is actived", "success");
      
    }
    if (e==='grey') {
      console.log(e)
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is actived", "success");
    }
    if (e==='blue') {
      console.log(e)
      document.body.style.backgroundColor = '#3498db';
      showAlert("Blue mode is actived", "success");
    }
    if (e==='green') {
      console.log(e)
      document.body.style.backgroundColor = '#27ae60';
      showAlert("Green mode is actived", "success");
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
