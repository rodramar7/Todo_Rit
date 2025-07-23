import React from "react";
import TaskForm from "../components/TaskForm";
import TaskItem from "../components/TaskItem";

const Home = ({ tasks, newTask, setNewTask, addTask, toggleCompleted, deleteTask }) => {
  return (
    <div>
      <TaskForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            toggleCompleted={toggleCompleted}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
