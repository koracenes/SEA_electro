import React from "react";
import TaskList from "../Components/TaskList";
function Alltasks({ tasks, updateTaskStatus }) {
  return (
    <div className="page">
      <h2>All Tasks</h2>
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} />
    </div>
  );
}

export default Alltasks;
