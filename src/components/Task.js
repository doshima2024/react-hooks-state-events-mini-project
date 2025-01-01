import React from "react";
import TaskList from "./TaskList.js"
import TASKS from "../data"



function Task( {task, deleteTask}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={() => deleteTask(task.id)}>X</button>
    </div>
  );
}

export default Task;
