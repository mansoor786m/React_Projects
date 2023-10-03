import React from "react";

import './App.css'



const Obj = {
  name: "mansoor" ,
  age: 30

}


function Diff() {
  return (
  <>
    <h1>my name is Muhammad {Obj.name} and my ageeeeeeeeeee is {Obj.age} year</h1>

  </>
  );
}


const Change = () => {


  return (
    <>
      <h1>Hellow Muhammad Mansoor  </h1>
      <Diff/>

    </>
  );
}


export default Change();
