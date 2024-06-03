import React from 'react';
import './AddVideo.css'

export default function AddVideo() {

    function handleSubmit(e) {
        e.preventDefault()

    }

    function handleChange(e) {
        console.log(e.target.name, e.target.value)
    }

    return (
        <form >
            <input type="text" onChange={handleChange} name='title' placeholder='title' />
            <input type="text" onChange={handleChange} name='views' placeholder='views' />

            <button onClick={handleSubmit}
            // onClick={() => {
            //     setVideos([...videos, {
            //         id: videos.length + 1,
            //         title: 'Demo JS tutorial',
            //         views: '1M',
            //         time: '1 month ago',
            //         channel: 'Coder Dost',
            //         verified: true
            //     }]);
            // }}
            >Add Video</button>

        </form>
    )
}
