import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Task Manager</h1>
      <div className="links">
        <Link to="/">All Tasks</Link>
        <Link to="/in-process">In Process</Link>
        <Link to="/finished">Finished</Link>
        <Link to="/create">Create Task</Link>
      </div>
    </nav>
  );
};

export default Navbar;
