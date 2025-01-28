import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import AllTasks from "../Components/TaskForm";
import InProcess from "./InProcess";
import Finished from "./pages/Finished";
import CreateTask from "./pages/CreateTask";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, status: "in process" }]);
  };

  const updateTaskStatus = (id, status) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, status: status } : task))
    );
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <AllTasks tasks={tasks} updateTaskStatus={updateTaskStatus} />
          }
        />
        <Route
          path="/in-process"
          element={
            <InProcess tasks={tasks} updateTaskStatus={updateTaskStatus} />
          }
        />
        <Route
          path="/finished"
          element={
            <Finished tasks={tasks} updateTaskStatus={updateTaskStatus} />
          }
        />
        <Route path="/create" element={<CreateTask addTask={addTask} />} />
      </Routes>
    </Router>
  );
}

export default TaskManager;
