import React, { useEffect, useState } from "react";
// import ReactDOM from 'react-dom/client';
import './App.css';



// function showDate(d) {
//   return (
//     <h2>{nowDate}</h2>
//   )
// }


const Change = () => {



  const [time, setTime] = useState(new Date())
  const [finalDate, setFinaldate] = useState()






  console.log(time);
  // // const [target, setTarget] = useState(nowDate.toLocaleString())

  const handleClick = () => {
    //   console.log(nowDate.toLocaleString())
    //   console.log(nowDate.to)
  }

  const HandleChange = (e) => {

    setFinaldate(new Date())
  }




  return (
    <div className="body">
      <h1 className="text-4xl font-bold underline my-3">React Project NO 01 </h1>
      <h1 className="text-2xl font-bold">Count Down App</h1>
      <h2 className="text-3xl text-green-500 my-4 font-bold underline"> {time.toString()}</h2>

      <input className="text-2xl text-blue-600 my-4 font-bold " type="datetime-local" placeholder="enter date" onChange={HandleChange} />

      <button className='text-center text-black text-2xl bg-green-500 rounded-full font-extrabold  p-2 m-3' onClick={handleClick}>
        Get Started
      </button>


    </div>
  );
}


export default Change;


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