import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState} from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });





function App() {

  const [tasks, setTasks] = useState(TASKS)

  function deleteTask(id) {
    console.log(tasks)
   const updatedTasks = tasks.filter(task => task.id !== id)
   setTasks(updatedTasks)
  }

  function taskFormSubmission(newTask) {
      setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} taskFormSubmission={taskFormSubmission}/>
      <TaskList  tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
