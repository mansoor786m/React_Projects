import React, { useContext } from 'react'
import Video from './Video'
import PlayButton from './PlayButton'
import VideoContext from './context/videoContext'

export default function VideoList({ editVideo }) {
    const videos = useContext(VideoContext)
    return (
        <>
            {videos.map((video) => (
                <Video
                    key={video.id}
                    title={video.title}
                    views={video.views}
                    time={video.time}
                    channel={video.channel}
                    verified={video.verified}
                    id={video.id}
                    editVideo={editVideo}

                >
                    <PlayButton
                        onPlay={() => { console.log('playing..', video.title) }}
                        onPause={() => { console.log('paused..', video.title) }}
                    >
                        {video.title}
                    </PlayButton>

                </Video>
            ))}
        </>
    )
}
