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
              collaboratively in a team as project manager and mainly worked on
              the database, routes and logic.
            </small>
            <img src={KryptoHack} alt="KryptoHack" style={main.image} />
          </div>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Employee Tracker</h3>
          <div style={main.projectInfoContainer}>
            <small>
              This is a solo backend application created with NodeJS, ExpressJS
              and MySql. A server-side application that allows the user to view
              information about a workplace through querying the database. They
              can query about departments, roles and employees information.
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
              Using NodeJS and Javascript, he user will be prompted with
              inputting information about their employees and the program will
              create a HTML and CSS file with the information. The user will be
              able to interact with information such as email and github
              accounts for easy access to contacting the employees.
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
              I am currently building a ReactJS client-side application where
              users can input ingredients that they have laying around at home
              and select the type of meal they want and then multiple recipes
              will be presented for them to choose for a meal to empty their
              fridge!
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
