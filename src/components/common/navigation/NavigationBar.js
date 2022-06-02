import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const activestyle = {
    color: "black",
    borderBottom: "solid black 2px",
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <NavLink to="/" activestyle={activestyle} exact = "true">
          {" "}
          Home{" "}
        </NavLink>
        <NavLink to="/admin" activestyle={activestyle}>
          {" "}
          Admin{" "}
        </NavLink>
      </nav>
    </div>
  );
};

export default NavigationBar;
