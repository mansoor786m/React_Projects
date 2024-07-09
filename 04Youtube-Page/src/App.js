import { useReducer, useState } from 'react';
import './App.css';
// import VideosDB from './Data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import VideoContext from './context/videoContext';
import Counter from './components/Counter';




function App() {
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState('lightMode')

  function videoReducer(videos, action) {
    switch (action.type) {
      case 'LOAD':
        return action.payload;

      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1 }
        ]

      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)

      case 'UPDATE':
        let index = videos.findIndex(v => v.id === action.payload.id)
        let newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        setEditableVideo(null)
        return newVideos;


      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, [])



  function editVideo(id) {
    setEditableVideo((videos.find(video => video.id === id)))

  }



  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>

          <div className={`App ${mode}`} onClick={() => console.log("app")}>
            <Counter></Counter>
            <button className={mode} onClick={() => setMode(mode === 'lightMode' ? 'darkMode' : 'lightMode')}>Mode</button>
            <AddVideo editableVideo={editableVideo} ></AddVideo>
            <VideoList className={App} editVideo={editVideo} ></VideoList>


          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
