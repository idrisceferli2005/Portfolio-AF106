
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
function ToDoList() {
  const [tasks, setTasks] = useState([
    { text: "Eat Breakfast", completed: false },
    { text: "Take a shower", completed: false },
    { text: "Walk the dog", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((text) => [...text, { text: newTask, completed: false }]);
      setNewTask("");
      toast.success("Task əlavə edildi!");
    }
  }

  function deleteTask(index) {
    if (tasks[index].completed) {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
      toast.info("Task silindi!");
    }
  }

  function toggleComplete(index) {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
   
  }

  function editTask(index, newText) {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, text: newText };
      }
      return task;
    });
    setTasks(updatedTasks);
    toast.info("Task duzeldildi!");
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
      toast.info("Task yuxarı qalxdı!");
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
      toast.info("Task aşağı endi!");
    }
  }

  function clearAllTasks() {
    setTasks([]);
    toast.warn("Bütün tapşırıqlar silindi!");
  }

  return (
    <div className="todolist">
       <ToastContainer position="top-right" autoClose={3000} />
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="addButton" onClick={addTask}>
          Add
        </button>
        <button className="clearButton" onClick={clearAllTasks}>
          Clear All
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              color: task.completed ? "green" : "red",
              textDecoration: task.completed ? "line-through" : "none",
            }}
          >
            {index + 1}. <span className="text">{task.text}</span>
            <button
              className="completeButton"
              onClick={() => toggleComplete(index)}
            >
              {task.completed ? "Tamamlanmamis" : "Complete"}
            </button>

             
              <button
                className="deleteButton"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            
              <button
                className="editButton"
                onClick={() => {
                  const newText = prompt("Edit task:", task.text);
                  if (newText !== null && newText.trim() !== "") {
                    editTask(index, newText);
                  }
                }}
              >
                Edit
              </button>
            

            <button className="moveButton" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button
              className="moveButton"
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;