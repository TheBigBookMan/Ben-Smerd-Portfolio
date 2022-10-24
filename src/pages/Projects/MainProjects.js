import React from "react";
import KryptoHack from "../../images/KryptoHack.png";
import EmployeeTracker from "../../images/EmployeeTracker.png";
import TeamProfileGenerator from "../../images/TeamProfileGenerator.png";
import EmptyYourFridge from "../../images/EmptyYouFridge.png";
import { mainProjectStyles as main } from "./styles/MainStyles";

const MainProjects = () => {
  return (
    <div style={main.mainProjectsDisplay}>
      <h2 style={main.projectTitle}>
        Main Projects-{" "}
        <small>Click image for GitHub, deployed links in ReadME</small>
      </h2>
      <ul style={main.projectContainer}>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>KryptoHack</h3>
          <div style={main.projectInfoContainer}>
            <small style={main.projectText}>
              This is a crypto coin app that uses Javascript, NodeJS, MySql,
              ExpressJS and a coingeko crypto third party API. I worked
              collaboratively in a team as project manager and mainly worked on
              the database, routes and logic.
            </small>
            <img
              onClick={() =>
                window.open("https://github.com/Canon70D/KryptoHack")
              }
              src={KryptoHack}
              alt="KryptoHack"
              style={main.image}
            />
          </div>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Employee Tracker</h3>
          <div style={main.projectInfoContainer}>
            <small style={main.projectText}>
              Backend application I created with NodeJS, ExpressJS and MySql. A
              server-side app that allows the user to view information about a
              workplace through querying the database. They can query about
              departments, roles and employees information.
            </small>
            <img
              onClick={() =>
                window.open("https://github.com/TheBigBookMan/Employee-Tracker")
              }
              src={EmployeeTracker}
              alt="EmployeeTracker"
              style={main.image}
            />
          </div>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Team Profile Generator</h3>
          <div style={main.projectInfoContainer}>
            <small style={main.projectText}>
              Using NodeJS and OOP, the user inputs details about their
              employees and a HTML and CSS file with the information will be
              created. The user will be able to interact with information such
              as email and github accounts for easy access to contacting the
              employees.
            </small>
            <img
              onClick={() =>
                window.open(
                  "https://github.com/TheBigBookMan/Team-Profile-Generator"
                )
              }
              src={TeamProfileGenerator}
              alt="TeamProfileGenerator"
              style={main.image}
            />
          </div>
        </li>
        <li style={main.project}>
          <h3 style={main.projectsTitle}>Empty Your Fridge (Coming soon...)</h3>
          <div style={main.projectInfoContainer}>
            <small style={main.projectText}>
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
