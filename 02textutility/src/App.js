import React from 'react'
import { useState } from 'react'
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import Textarea from './component/Textarea';
import Alert from './component/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route

// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
  const handleDarkMode = (e) => {
    setmode(e);


    if (e === 'light') {
      console.log(e)
      document.body.style.backgroundColor = '#ecf0f1';
      showAlert("Light mode is actived", "success");
      setInterval(() => {
        document.title = "Textutils -Home"
      }, 2000);
      setInterval(() => {
        document.title = "Textutils -Light"
      }, 1500);
    }
    if (e === 'grey') {
      console.log(e)
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode is actived", "success");
      setInterval(() => {
        document.title = "Textutils -Home"
      }, 2000);
      setInterval(() => {
        document.title = "Textutils -Grey"
      }, 1500);
    }
    if (e === 'blue') {
      console.log(e)
      document.body.style.backgroundColor = '#3498db';
      showAlert("Blue mode is actived", "success");
    }
    if (e === 'green') {
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
      
      {/* <Router> */}
      <Navbar title="Textutility" about='Disable' mode={mode} handleDarkMode={handleDarkMode} />
      <Alert alert={alert} />
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route> */}

          {/* <Route exact path="/"> */}
            <Textarea showAlert={showAlert} title="Enter Your Text Here :" mode={mode} ></Textarea>
          {/* </Route>
        </Switch>
      </Router> */}



    </>
  );
}

export default App;
