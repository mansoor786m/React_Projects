
import Video from './Video'
import PlayButton from './PlayButton'
import useVideos from '../hooks/videos'
import axios from 'axios'
import { useEffect } from 'react'
import useVideoDispatch from '../hooks/videoDispatch'



export default function VideoList({ editVideo }) {

    const url = 'https://my.api.mockaroo.com/video_data.json?key=2a3f1980'
    const dispatch = useVideoDispatch();


    async function getVideo() {
        const res = await axios.get(url)
        console.log(res.data)
        dispatch({ type: 'LOAD', payload: res.data })
    }
    useEffect(() => {
        getVideo()
    }, [])


    const videos = useVideos()
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
