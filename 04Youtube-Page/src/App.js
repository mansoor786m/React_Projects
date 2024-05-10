import './App.css';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import VideosDB from './Data/data';


function App() {

  return (
    <div className="App">


      {VideosDB.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton>PLAY</PlayButton>
          <PlayButton
            onPlay={() => console.log('Playing..', video.title)}
            onPause={() => console.log('Paused..', video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
    </div>
  );
}

export default App;
