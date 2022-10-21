import React from "react";
import KryptoHack from "../../images/KryptoHack.png";

const mainProjectStyles = {
  mainProjectsDisplay: {
    display: "flex",
    flexDirection: "column",
    width: "900px",
    height: "470px",
    border: "solid rgb(46, 94, 176) 5px",
    borderRadius: "50px",
    padding: "20px",
    backgroundColor: "#fee4ff",
    marginLeft: "30px",
  },
  projectTitle: {
    color: "rgb(46, 94, 176)",
  },
  projectContainer: {
    border: "green solid 3px",
    maxWidth: "900px",
    height: "100%",
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  project: {
    border: "solid black 3px",
    width: "440px",
    height: "50%",
  },
  projectsTitle: {
    fontStyle: "italic",
    color: "#10c6ef",
  },
  projectInfoContainer: {
    // border: "red solid 2px",
    width: "100%",
    display: "flex",
    letterSpacing: "1px",
  },
  image: {
    width: "250px",
    height: "150px",
  },
};

// !!! NEED TO REDO UP THE CSS FOR THE EMPLOYEE MANAGER LOOKS SO SHIT

const MainProjects = () => {
  return (
    <div style={mainProjectStyles.mainProjectsDisplay}>
      <h2 style={mainProjectStyles.projectTitle}>Main Projects</h2>
      <ul style={mainProjectStyles.projectContainer}>
        <li style={mainProjectStyles.project}>
          <h3 style={mainProjectStyles.projectsTitle}>KryptoHack</h3>
          <div style={mainProjectStyles.projectInfoContainer}>
            <small>
              This is a crypto app that uses Javascript, NodeJS, MySql,
              ExpressJS and a coingeko crypto third party API. I worked
              collaboratively and mainly worked on the backend.
            </small>
            <img
              src={KryptoHack}
              alt="KryptoHack"
              style={mainProjectStyles.image}
            />
          </div>
        </li>
        <li style={mainProjectStyles.project}>
          <h3 style={mainProjectStyles.projectsTitle}>Employee Tracker</h3>
        </li>
        <li style={mainProjectStyles.project}>
          <h3 style={mainProjectStyles.projectsTitle}>
            Team Profile Generator
          </h3>
        </li>
        <li style={mainProjectStyles.project}>
          <h3 style={mainProjectStyles.projectsTitle}>
            Empty Your Fridge (Coming soon...)
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default MainProjects;
