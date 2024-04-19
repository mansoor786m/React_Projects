import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mansoor786m')
    //         .then(res => res.json())
    //         .then(res => setData(res))
    //     // console.log(data)
    // }, []
    // )

    console.log(data)
    return (
        <div className='text-center m-5 p-4 bg-gray-500 text-white flex space-x-10'>

            <div>
                <h2> UserName: {data.name}</h2>
                <h2> GitHub Followers: {data.followers}</h2>
                <h2> GitHub Link: {data.url}</h2>
            </div>
            <img src={data.avatar_url} />

        </div>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
    const responce = await fetch('https://api.github.com/users/mansoor786m')
    return responce.json()
}
