import React from "react";

const TaskForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Add new task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={addTask}>Add</button>
    </div>
  );
};

export default TaskForm;
