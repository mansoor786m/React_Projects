import { useContext, useReducer, useState } from 'react';
import './App.css';
import VideosDB from './Data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import ThemeContext from './components/context/ThemeContext';
import VideoDispatchContext from './components/context/VideoDispatchContext';
import VideoContext from './components/context/videoContext';




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
  // console.log(themeContext)
  // console.log(videos)
  // console.log(dispatch)

  return (
    <ThemeContext.Provider value={mode}>
      <VideoContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>

          <div className={`App ${mode}`} onClick={() => console.log("app")}>
            <button className={mode} onClick={() => setMode(mode === 'lightMode' ? 'darkMode' : 'lightMode')}>Mode</button>
            <AddVideo editableVideo={editableVideo} ></AddVideo>
            <VideoList editVideo={editVideo} ></VideoList>


          </div>
        </VideoDispatchContext.Provider>
      </VideoContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
