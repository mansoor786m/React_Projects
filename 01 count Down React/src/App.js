import React, { useState } from "react";
// import ReactDOM from 'react-dom/client';
import './App.css';
import DateTimeDisplay from "./DateTimeDisplay";



// function showDate(d) {
//   return (
//     <h2>{nowDate}</h2>
//   )
// }


const App = () => {



  const [time, setTime] = useState(new Date())
  const [finalDate, setFinaldate] = useState()
  const [month, setMonth] = useState()
  const [day, setDay] = useState()
  const [hrs, setHrs] = useState()
  const [min, setMin] = useState()
  const [sec, setSec] = useState()

  const HandleChange = (e) => {
    setFinaldate(new Date(e.target.value))
  }

  const handleClick = () => {
    setTime(new Date())
    const diff = (finalDate - time) / 1000;
    console.log(diff)

    if (diff > 0) {

      // convert into days;

      setMonth(Math.floor((diff % 31536000) / 2628000))
      setDay(Math.floor(((diff % 31536000) % 2628000) / 86400))
      setHrs(Math.floor((((diff % 31536000) % 2628000) % 86400) / 3600))
      setMin(Math.floor((((diff % 31536000) % 86400) % 3600) / 60))
      setSec(Math.floor(diff) % 60)




    }
    else return;

  }
  console.log(month)







  return (
    <div className="body">
      <h1 className="text-4xl font-bold underline my-3">React Project NO 01 </h1>
      <h1 className="text-2xl font-bold">Count Down App</h1>
      <h2 className="text-3xl text-green-500 my-4 font-bold underline"> {time.toString()}</h2>

      <input className="text-2xl text-blue-600 my-4 font-bold " type="datetime-local" placeholder="enter date" onChange={HandleChange} />

      <button className='text-center text-black text-2xl bg-green-500 rounded-full font-extrabold  p-2 m-3' onClick={handleClick}>
        Get Started
      </button>
      <DateTimeDisplay month={month} day={day} hrs={hrs} min={min} sec={sec} />


    </div>
  );
}


export default App;


// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function TodoList() {
//   return (
//     <h1>To Do List for {formatDate(today)}</h1>
//   );
// }