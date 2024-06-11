import { useReducer, useState } from 'react';
import './App.css';
import VideosDB from './Data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';




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

  // const [videos, setVideos] = useState(VideosDB)
  const [editableVideo, setEditableVideo] = useState(null);





  function editVideo(id) {
    setEditableVideo((videos.find(video => video.id === id)))

  }

  return (
    <div className="App" onClick={() => console.log("app")}>

      <AddVideo dispatch={dispatch} editableVideo={editableVideo} ></AddVideo>
      <VideoList dispatch={dispatch} editVideo={editVideo} videos={videos}></VideoList>


    </div>
  );
}

export default App;
