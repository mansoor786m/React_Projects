import React, { useState } from 'react'



export default function Textarea(props) {

    const [text, setText] = useState('Enter Text Here now');

    const handleOnChange = (event) => {
        setText(event.target.value);

    }
    const changeUperCase = () => {
        setText(text.toUpperCase());

    }
    const changeLowerCase = () => {
        setText(text.toLowerCase());

    }
    const changeCamalCase = () => {
        setText(text.toLocaleLowerCase());

    }
    const changeReverseText = () => {
        let str = text.split('').reverse().join('');
        // console.log(str)
        setText(str)
    }


    const changeReverseword = () => {
    
        let arr = text.split(" ");
        // console.log(arr)
        let str="";
        for (let index =arr.length-1; index >=0; index--) {
            console.log(arr[index]);
            str.join(' ') += arr[index]
            
            console.log(str);
            
        }
   
    }


    return (
        <>
            <div className='container'>

                <div className="mb-3">
                    <h2 class=" text-white" >{props.title}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={changeUperCase}>Upper Case</button>
                <button className='btn btn-primary mx-1' onClick={changeLowerCase}>Lower Case</button>
                <button className='btn btn-primary mx-1' onClick={changeCamalCase}>Camal Case</button>
                <button className='btn btn-primary mx-1' onClick={changeReverseText}>Reverse Text</button>
                <button className='btn btn-primary mx-1' onClick={changeReverseword}>Reverse Word</button>


            </div>

            <div className="container text-white border my-3">
                <h2> Text Summery</h2>
                <h5>{text.length} Words and {text.split(" ").length} Character</h5>
                <h2>Preview</h2>
                <p>{text}</p>


            </div>
        </>
    )
}
