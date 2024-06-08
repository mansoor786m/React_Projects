import { useReducer, useState } from 'react';
import './App.css';
import VideosDB from './Data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import { type } from '@testing-library/user-event/dist/type';


function App() {

  // function videoReducer(videos, action) {
  //   switch (action.type) {
  //     case 'ADD':
  //       return

  //     default:
  //       return videos;
  //   }

  // }

  // const [videos, dispatch] = useReducer(videoReducer, VideosDB)

  const [videos, setVideos] = useState(VideosDB)
  const [editableVideo, setEditableVideo] = useState(null);

  function addVideo(video) {
    // dispatch({ type: 'ADD', payload: video })
    setVideos([
      ...videos,
      { ...video, id: videos.length + 1 }
    ]);
  }



  function deleteVideo(id) {

    setVideos(videos.filter(video => video.id !== id))
  }
  function editVideo(id) {
    setEditableVideo((videos.find(video => video.id === id)))

  }
  function updateVideo(video) {
    let index = videos.findIndex(v => v.id === video.id)
    // console.log(index, video)
    let newVideos = [...videos]
    newVideos.splice(index, 1, video)
    setVideos(newVideos)

  }

  return (
    <div className="App" onClick={() => console.log("app")}>

      <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList deleteVideo={deleteVideo} editVideo={editVideo} videos={videos}></VideoList>


    </div>
  );
}

export default App;
