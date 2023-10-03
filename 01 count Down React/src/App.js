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
  console.log(nowDate.toString());



  return (
    <div className="body">
      <h1>React Project NO 01 </h1>
      <h1>Count Down App</h1>
      <h2> {nowDate.toString()}</h2>
      <input type = "date" placeholder="enter date"/>



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