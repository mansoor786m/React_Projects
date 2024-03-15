import React from 'react'

export default function DateTimeDisplay({month ,day ,hrs,min, sec}) {
  return (
    <div className='flex flex-row m-10'>
        <div className='flex flex-col m-2 '>
            <input className='text-black font-bold'>{month}</input>
            <label className='text-red-100 font-bold'>Month</label>
        </div>
        <div className='flex flex-col m-2'>
            <input className='text-black font-bold'>{day}</input>
            <label className='text-red-100 font-bold'>day</label>
        </div>
        <div className='flex flex-col m-2 '>
            <input className='text-black font-bold'>{hrs}</input>
            <label className='text-red-100 font-bold'>Hrs</label>
        </div>
        <div className='flex flex-col m-2'>
            <input className='text-black font-bold'>{min}</input>
            <label className='text-red-100 font-bold'>Min</label>
        </div>
        <div className='flex flex-col m-2'>
            <input className='text-black font-bold'>{sec}</input>
            <label className='text-red-100 font-bold'>Sec</label>
        </div>
      
    </div>
  )
}
