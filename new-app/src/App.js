import React from 'react';
import './App.css';




function Show({object}){
    return(
        <div>
        <h1> my name is {object.name} and my age is {object.age}</h1>
        </div>
    );
}

export default function dataShow(){
    return(
        <div>
            <Show object = {{    name: 'mansoor', age: 30 }} />
        </div>
    )
}