import React, { useRef, useState } from 'react'

const Counter = () => {
    console.log('render Counter')
    const [number, setNumber] = useState(0)
    let num = useRef(0)
    function handleClick(e) {
        e.stopPropagation();

        setNumber(number => number + 1)
        setNumber(number => number + 1)
        setNumber(number => number + 1)
        num.current++
        console.log(num.current)
        console.log(num)
    }
    return (
        <>
            <h1 style={{ color: 'white' }}>{number}</h1>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

export default Counter
