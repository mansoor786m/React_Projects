import React, { useReducer, useState } from "react";
import ListItem from "./Components/ListItem";
const arr = ["habib", "mansoor"];

// let completedTask = 0;
const App = () => {
  // const [allTask, setAllTask] = useState(["habib", "mansoor"]);
  const [newTask, setNewTask] = useState("");
  const [editID, setEditID] = useState(false)
  const [editableTask, setEditableTask] = useState('')
  const [completedTask, setCompletedTask] = useState(0)

  const taskReducer = (allTask, action) => {
    switch (action.type) {
      case "Add": {
        if (editID) {
          let index = allTask.findIndex((e)=> e == editableTask);
          let tasks = [...allTask]
          tasks.splice(index, 1, action.payload)
          setEditID(false)
          return tasks;
        } else {
          if (action.payload == '') {
            alert('Please Enter your Task')
            return allTask;
          }else {
            return [...allTask, action.payload];
          }
        }
      }
      case "Delete": {
        let taskIndex = allTask.findIndex((task) => task === action.payload);
        let tasks = [...allTask];
        tasks.splice(taskIndex, 1);
        return tasks;
      }
      case 'Edit': {
        setEditableTask(action.payload)
        setNewTask(action.payload)
        setEditID(true)
      }
      case 'completedTask' : {
        setCompletedTask(action.payload)
        return allTask;
      }
      default:
        return allTask;
    }
  };

  const [allTask, dispatch] = useReducer(taskReducer, arr);

  const changeHandler = (event) => {
    setNewTask(event.target.value);
  };
  const submitHandler = () => {
    // setAllTask([...allTask, newTask]);
    dispatch({ type: "Add", payload: newTask });
    setNewTask("");
  };
  return (
    <div className="container bg-slate-200 h-screen	flex items-center flex-col justify-center">
      <h1 className="text text-center m-3 pb-4 p-3 text-violet-800 text-4xl font-bold border-b-2 border-violet-700 w-full">
        TODO List
      </h1>
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Add Task"
          className="input p-2 m-2 w-80 rounded-md text-center border border-red-500"
          // value={editableTask != '' ? editableTask : newTask}
          value={newTask}
          onChange={changeHandler}
        />
        <button
          className="text bg-red-500 text-white px-4 py-2 m-2 rounded-md hover:bg-slate-800 duration-300"
          onClick={submitHandler}
        >
          {editID? 'update' : 'Add'} Task
        </button>
      </div>

      <ListItem tasks={allTask} dispatch={dispatch} />

      <div className="w-full">
        <h2 className="text text-center text-2xl text-blue-950 font-mono m-3 p-3 border-t-2 border-blue-900 w-full">
          Completed Items {completedTask}/{allTask.length}
        </h2>
      </div>
    </div>
  );
};

export default App;
