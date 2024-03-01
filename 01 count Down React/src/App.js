import React from "react";
// import ReactDOM from 'react-dom/client';
import './App.css';



// function showDate(d) {
//   return (
//     <h2>{nowDate}</h2>
//   )
// }

const Change = () => {


  const nowDate = new Date();
  // console.log(nowDate.toString());




  return (
    <div className="body">
      <h1  className="text-4xl font-bold underline my-3">React Project NO 01 </h1>
      <h1  className="text-2xl font-bold">Count Down App</h1>
      <h2  className="text-3xl text-green-500 my-4 font-bold underline"> {nowDate.toString()}</h2>
      <input  className="text-2xl text-blue-600 my-4 font-bold " type = "date" placeholder="enter date"/>

      <button className='text-center text-2xl bg-gray-500 font-bold rounded-xl p-2 m-3'>
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