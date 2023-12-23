import React, { useState } from 'react'



export default function Textarea(props) {
    // console.log(props.showAlert())

    const [text, setText] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit quos blanditiis sequi doloremque! Fuga placeat corrupti accusamus eaque reprehenderit esse sapiente laborum beatae numquam veniam ipsum sequi quos dignissimos, consequuntur doloremque pariatur totam dicta maxime dolorum repellendus? Accusantium, porro. Animi cupiditate tempore rem blanditiis iure vitae facere soluta asperiores voluptate!');

    const handleOnChange = (event) => {
        setText(event.target.value);

    }

    const changeUperCase = () => {
        setText(text.toUpperCase());
        props.showAlert("Convert to Upper Case" , "success")

    }

    const changeLowerCase = () => {
        setText(text.toLowerCase());
        props.showAlert("Convert to Lower Case" , "success")

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
        props.showAlert("Convert to Capitalize " , "success")

    }
    const changeReverseText = () => {
        let str = text.split('').reverse().join('');
        // console.log(str)
        setText(str)
        props.showAlert("Convert to Reverse text" , "success")
    }


    const changeReverseword = () => {

        const arr = text.split(" ");
        const revarr = arr.reverse();
        const revtext = revarr.join(' ');
        setText(revtext);

    }
    const handleCopy = () => {
        
        const selectText = document.getElementById('my-text')
        selectText.select();

        selectText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(selectText.value);
        // console.log(text)  
    }
    const handleExtreSpace = () => {
        let newtext = text.split(/[ ]+/);
        console.log(newtext)
        setText(newtext.join(" "));

        props.showAlert("Extra Space Removed" , "success")
 
    }




    return (
        <>

        
            <div className='container'>
                

                <div className={`mb-3 text-${props.mode === 'light'? 'black':'white'}`}>
                    <h2  >{props.title}</h2>
                    <textarea className="form-control"style={{backgroundColor: props.mode === 'light'? 'white': props.mode , color: props.mode === 'light'? 'black':'white'}}  value={text} onChange={handleOnChange} id="my-text" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1  my-2' onClick={changeUperCase}>Upper Case</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeLowerCase}>Lower Case</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeCapitalCase}>Capitalize Case</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeReverseText}>Reverse Text</button>
                <button className='btn btn-primary mx-1  my-2' onClick={changeReverseword}>Reverse Word</button>
                <button className='btn btn-primary mx-1  my-2' onClick={handleCopy}>Copy Text</button>
                <button className='btn btn-primary mx-1  my-2' onClick={handleExtreSpace}>Remove Spaces</button>


            </div>

            <div className={`container text-${props.mode === 'light'? 'grey':'white'}  my-2`} >
                <h2> Text Summery</h2>
                <h5>{text.length} Words and {text.split(" ").length} Character</h5>
                <h2>Preview</h2>
                <p>{text.length>0? text :"Please Enter Above text to preview"}</p>


            </div>
        </>
    )
}
