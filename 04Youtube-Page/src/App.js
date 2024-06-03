import { useState } from 'react';
import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import VideosDB from './Data/data';
import AddVideo from './components/AddVideo';


function App() {
  const [videos, setVideos] = useState(VideosDB)

  return (
    <div className="App" onClick={() => console.log('app')}>

      <AddVideo></AddVideo>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => { console.log('playing..', video.title) }}
            onPause={() => { console.log('paused..', video.title) }}
          >
            {video.title}
          </PlayButton>

        </Video>
      ))}
      {/* <div style={{ clear: 'both' }}>
        <PlayButton onPlay={() => { console.log('playy message') }} onPause={() => { console.log('pause message') }}> Play</PlayButton>
        <PlayButton message='pause-message' onPlay={() => { console.log('pause message') }}> Pause</PlayButton>
      </div> */}

    </div>
  );
}

export default App;
