import React, { useContext, useEffect, useState } from 'react';
import './AddVideo.css'
import ThemeContext from './context/ThemeContext';
import useVideoDispatch from './hooks/videoDispatch';

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title: '',
    views: ''
}

export default function AddVideo({ editableVideo }) {

    const [video, setVideo] = useState(initialState);
    const dispatch = useVideoDispatch()


    function handleSubmit(e) {
        e.preventDefault()
        if (editableVideo) {
            dispatch({ type: 'UPDATE', payload: video })
        } else {
            dispatch({ type: 'ADD', payload: video })
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
    const themeContext = useContext(ThemeContext)

    return (
        <form >
            <input type="text" onChange={handleChange} value={video.title} name='title' placeholder='title' />
            <input type="text" onChange={handleChange} value={video.views} name='views' placeholder='views' />

            <button className={themeContext} onClick={handleSubmit}

            >{editableVideo ? 'Update ' : 'Add '}Video</button>

        </form>
    )
}
