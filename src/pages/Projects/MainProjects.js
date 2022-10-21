import React from "react";
import KryptoHack from "../../images/KryptoHack.png";
import { mainProjectStyles as main } from "./styles/MainStyles";

// !!! NEED TO REDO UP THE CSS FOR THE EMPLOYEE MANAGER LOOKS SO SHIT

const MainProjects = () => {
  return (
    <div style={main.mainProjectsDisplay}>
      <h2 style={main.projectTitle}>Main Projects</h2>
      <ul style={main.projectContainer}>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>KryptoHack</h3>
          <div style={main.projectInfoContainer}>
            <small>
              This is a crypto coin app that uses Javascript, NodeJS, MySql,
              ExpressJS and a coingeko crypto third party API. I worked
              collaboratively and mainly worked on the backend.
            </small>
            <img src={KryptoHack} alt="KryptoHack" style={main.image} />
          </div>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Employee Tracker</h3>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Team Profile Generator</h3>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Empty Your Fridge (Coming soon...)</h3>
        </li>
      </ul>
    </div>
  );
};

export default MainProjects;
