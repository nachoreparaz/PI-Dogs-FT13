import React from "react";
import { NavLink } from "react-router-dom";
import "./Landing.css";

export const LandingPage = () => {
  return (
    <div className="fondoLanding">
      <div className="title">
        <h1>HENRY DOGS</h1>
      </div>
      <div className="LandingBtn">
        <NavLink to="/Home">
          <button className="pushable">
            <span className="front">START</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
};
export default LandingPage;
