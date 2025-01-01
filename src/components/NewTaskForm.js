import React from "react";
import { useState } from "react";

function NewTaskForm( {categories, taskFormSubmission}) {
  
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  
  function handleSubmit(event) {
    event.preventDefault();
    const newTask = { text, category };
    taskFormSubmission(newTask);
  }
  
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(event => setText(event.target.value))}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
          {/* render <option> elements for each category here */}
          {categories
            .filter((category) => category !== "All")
            .map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
