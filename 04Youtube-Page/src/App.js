import { useContext, useReducer, useState } from 'react';
import './App.css';
import VideosDB from './Data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './components/context/ThemeContext';




function App() {

  function videoReducer(videos, action) {
    switch (action.type) {
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
        return newVideos;


      default:
        return videos;
    }
  }

  const [videos, dispatch] = useReducer(videoReducer, VideosDB)
  const [mode, setMode] = useState('lightMode')

  const [editableVideo, setEditableVideo] = useState(null);


  function editVideo(id) {
    setEditableVideo((videos.find(video => video.id === id)))

  }

  const themeContext = useContext(ThemeContext)
  console.log(themeContext)

  return (
    <ThemeContext.Provider value={mode}>
      <button className={mode} onClick={() => setMode(mode === 'lightMode' ? 'darkMode' : 'lightMode')}>Mode</button>
      <div className={`App ${mode}`} onClick={() => console.log("app")}>
        <AddVideo dispatch={dispatch} editableVideo={editableVideo} ></AddVideo>
        <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>


      </div>
    </ThemeContext.Provider>
  );
}

export default App;
