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
    const changeCapitalCase = () => {
        let str = text.split(' ');
        let new_arr = []
        for (let index = 0; index < str.length; index++) {
            const word = str[index];
            const first_latter = word[0].toUpperCase();
            const remaing = word.slice(1).toLowerCase();
            const new_word = first_latter + remaing;
            new_arr[index] = new_word;
        }
        setText(new_arr.join(' '))


    }
    const changeReverseText = () => {
        let str = text.split('').reverse().join('');
        // console.log(str)
        setText(str)
    }


    const changeReverseword = () => {

        const arr = text.split(" ");
        const revarr = arr.reverse();
        const revtext = revarr.join(' ');
        setText(revtext);

    }
    const changeBoldword = () => {

        
        setText(<b>text</b>);

    }




    return (
        <>
            <div className='container'>

                <div className="mb-3">
                    <h2 class=" text-white" >{props.title}</h2>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1  my-2' onClick={changeUperCase}>Upper Case</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeLowerCase}>Lower Case</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeCapitalCase}>Capitalize Case</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeReverseText}>Reverse Text</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeReverseword}>Reverse Word</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeBoldword}>Bold Word</button>


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
