import React, { useEffect, useState } from 'react'

const GitHub = () => {

    const [data, setData] = useState();
    useEffect(() => {
        fetch('https://api.github.com/users/mansoor786m')
            .then(res => res.json())
            .then(data => setData(data))
        console.log(data)
    }, []

    )
    return (
        <div className='text-center m-5 p-4 bg-gray-500 text-white'>
            <h2> UserName: {data.name}</h2>
            <h2> GitHub Followers :{data.followers}</h2>

        </div>
    )
}

export default GitHub
