import React, { useState } from "react";

const ListItem = ({ tasks, dispatch }) => {
const [completeID, setCompleteID] = useState('')
const [completedTask, setCompletedTask] = useState([])
  const ChangeChecked= (e,task)=>{
    let index = tasks.findIndex((e)=> e == task)
    if (e.target.checked) {
      tasks.map(
        (e,i)=>{
          if(index===i) {
            setCompleteID(index)
            setCompletedTask([...completedTask, index])
          }
        }
       )
    } else {
      let comptask = [...completedTask]
      comptask.splice(index, 1)
      setCompletedTask(comptask)
    }
    dispatch({type:'completedTask', payload:completedTask.length})
  }

  return (
    <div className="w-1/2 m-3">
      {tasks.map((task, index) => (
        <p
          key={index}
          className="text text-left text-red-950 text-xl p-2 m-2 rounded-md flex justify-between items-center bg-slate-100 shadow-sm shadow-neutral-300"
          sty>
          <input type="checkbox" onChange={(e)=>ChangeChecked(e, task)}/>
          {completedTask.includes(index)? <s>{task}</s> :task}
          <span className="flex gap-3">
            <i className="fa-solid fa-pen-to-square " onClick={() => dispatch({ type: "Edit", payload: task })}></i>
            <i
              className="fa-sharp fa-solid fa-trash"
              onClick={() => dispatch({ type: "Delete", payload: task })}
            ></i>
          </span>
        </p>
      ))}
    </div>
  );
};

export default ListItem;
