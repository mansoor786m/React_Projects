import React from 'react'
import { useState } from 'react'
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import Alert from './component/Alert';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState('null');
  const handleDarkMode = () => {

    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is actived","Success");
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is actived","Success");
    }

  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      showAlert('null')
    }, 2000);
  }

  return (
    <>
      <Navbar title="Textutility" about='Disable' mode={mode} toggleMode={handleDarkMode} />
      <Alert alert={alert} />
      <Textarea title="Enter Your Text Here :" mode={mode} ></Textarea>
      {/* <About /> */}
    </>
  );
}

export default App;
