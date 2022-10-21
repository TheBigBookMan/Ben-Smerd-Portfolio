import React from "react";
import KryptoHack from "../../images/KryptoHack.png";
import EmployeeTracker from "../../images/EmployeeTracker.png";
import TeamProfileGenerator from "../../images/TeamProfileGenerator.png";
import EmptyYourFridge from "../../images/EmptyYouFridge.png";
import { mainProjectStyles as main } from "./styles/MainStyles";

// !!! NEED TO REDO UP THE CSS FOR THE EMPLOYEE MANAGER LOOKS SO SHIT
// NEED TO MAKE THE PROJETS CLICKABLE AND TAKE TO GITHUB REPO

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
          <div style={main.projectInfoContainer}>
            <small>
              This is a crypto coin app that uses Javascript, NodeJS, MySql,
              ExpressJS and a coingeko crypto third party API. I worked
              collaboratively and mainly worked on the backend.
            </small>
            <img
              src={EmployeeTracker}
              alt="EmployeeTracker"
              style={main.image}
            />
          </div>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Team Profile Generator</h3>
          <div style={main.projectInfoContainer}>
            <small>
              This is a crypto coin app that uses Javascript, NodeJS, MySql,
              ExpressJS and a coingeko crypto third party API. I worked
              collaboratively and mainly worked on the backend.
            </small>
            <img
              src={TeamProfileGenerator}
              alt="TeamProfileGenerator"
              style={main.image}
            />
          </div>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Empty Your Fridge (Coming soon...)</h3>
          <div style={main.projectInfoContainer}>
            <small>
              This is a crypto coin app that uses Javascript, NodeJS, MySql,
              ExpressJS and a coingeko crypto third party API. I worked
              collaboratively and mainly worked on the backend.
            </small>
            <img
              src={EmptyYourFridge}
              alt="EmptyYourFridge"
              style={main.image}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MainProjects;