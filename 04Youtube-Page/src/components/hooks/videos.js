import React, { useContext } from 'react'
import VideoContext from '../context/videoContext'

function useVideos() {
    return useContext(VideoContext);
}

export default useVideos;
