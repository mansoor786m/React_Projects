import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom/client';
import './App.css';
import DateTimeDisplay from "./DateTimeDisplay";



// function showDate(d) {
//   return (
//     <h2>{nowDate}</h2>
//   )
// }


const App = () => {



  // const [time, setTime] = useState(new Date())
  const [finalDate, setFinaldate] = useState(null)
  const [month, setMonth] = useState(0)
  const [day, setDay] = useState(0)
  const [hrs, setHrs] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)

  const HandleChange = (e) => {
    setFinaldate(new Date(e.target.value))
  }


  const getValues = () => {
    const time = new Date();
    const diff = (finalDate - time) / 1000;
    if (diff > 0) {
      // convert into days;
      setMonth(Math.floor((diff % 31536000) / 2628000));
      setDay(Math.floor(((diff % 31536000) % 2628000) / 86400));
      setHrs(Math.floor((((diff % 31536000) % 2628000) % 86400) / 3600));
      setMin(Math.floor((((diff % 31536000) % 86400) % 3600) / 60));
      setSec(Math.floor(diff) % 60);
      console.log(month, day, hrs, min, sec);
    }
  };

  useEffect(() => { getValues() }, [new Date()])

  const handleClick = () => {
    getValues()



    // const interval = setInterval(() => {
    //   getValues();
    // }, 1000);

  };


  return (
    <div className="body">
      <h1 className="text-4xl font-bold underline my-3">React Project NO 01 </h1>
      <h1 className="text-2xl font-bold">Count Down App</h1>
      <h2 className="text-3xl text-green-500 my-4 font-bold underline"> {new Date().toString()}</h2>

      <input className="text-2xl text-blue-600 my-4 font-bold " type="datetime-local" placeholder="enter date" onChange={HandleChange} />

      <button className='text-center text-black text-2xl bg-green-500 rounded-full font-extrabold  p-2 m-3' onClick={handleClick}>
        Get Started
      </button>
      <DateTimeDisplay month={month} day={day} hrs={hrs} min={min} sec={sec} />


    </div>
  );
}


export default App;


