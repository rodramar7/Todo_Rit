import React from "react";

const TaskItem = ({ task, toggleCompleted, deleteTask }) => {
  return (
    <li style={{ marginBottom: "10px" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompleted(task)}
      />
      <span
        style={{
          marginLeft: "10px",
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </span>
      <button
        onClick={() => deleteTask(task._id)}
        style={{ marginLeft: "15px", color: "red" }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
