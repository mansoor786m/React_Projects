import './Video.css';

function Video({ title, channel = "Coder Dost", views, time, verified, id, children, dispatch, editVideo, }) {
  return (
    <>
      <div className='container'>
        <button className='close' onClick={() => { dispatch({ type: 'DELETE', payload: id }) }}>X</button>
        <button className='edit' onClick={() => { editVideo(id) }}>--</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel}  {verified ? '  ok' : null}</div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}

export default Video;