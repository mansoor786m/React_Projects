import React, { useEffect, useState } from 'react'

export default function Pasword() {
    const [password , setPassword] = useState(null)
    const [characterAllowed , setCharacterAllowed] =useState(false)
    const [numberAllowed , setNumberAllowed] = useState(false)
    const [lengh , setLength] = useState(8)


    const PaswordGenerator =()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(characterAllowed) str += "0123456789"
        if(numberAllowed)  str += "!@#$%^&*-_+=[]{}~`"
        for (let index = 0; index < srt.length; index++) {
            const num = Math.floor(math.random())*str.length +1 ;
            pass += str.charAt(num)
            console.log(pass)
            
        }

    }

    useEffect(()=>{
        PaswordGenerator()
    },[lengh,numberAllowed, characterAllowed, PaswordGenerator ]
    )



  return (
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            // ref={passwordRef}
            />
            <button
            // onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            >copy</button>        
        </div>


        
     
    </div>
  )
}
