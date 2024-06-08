import React, { useEffect, useState } from 'react';
import './AddVideo.css'

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title: '',
    views: ''
}

export default function AddVideo({ addVideo, editableVideo, updateVideo }) {

    const [video, setVideo] = useState(initialState)


    function handleSubmit(e) {
        e.preventDefault()
        if (editableVideo) {
            updateVideo(video)
        } else {
            addVideo(video)
            // console.log(video)
        }
        setVideo(initialState)


    }

    function handleChange(e) {
        // console.log(e.target.name, e.target.value)
        setVideo(
            { ...video, [e.target.name]: e.target.value }
        )
    }

    useEffect(() => {
        if (editableVideo) {
            setVideo(editableVideo)
        }
    }, [editableVideo])

    return (
        <form >
            <input type="text" onChange={handleChange} value={video.title} name='title' placeholder='title' />
            <input type="text" onChange={handleChange} value={video.views} name='views' placeholder='views' />

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
            >{editableVideo ? 'Update ' : 'Add '}Video</button>

        </form>
    )
}
