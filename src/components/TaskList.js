import React from "react";
import Task from "./Task.js"

function TaskList( {tasks, deleteTask}) {
  return (
    <div className="tasks" >
      {/* display a list of tasks using Task component */}
      {tasks.map((task )=> (<Task key={task.id} task={task} deleteTask={deleteTask} />))}
    </div>
  );
}

export default TaskList;
