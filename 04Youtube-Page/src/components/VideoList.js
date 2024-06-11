import React from 'react'
import Video from './Video'
import PlayButton from './PlayButton'

export default function VideoList({ videos, dispatch, editVideo }) {
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
                    dispatch={dispatch}
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
