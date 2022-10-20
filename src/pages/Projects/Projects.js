// has a list of project screenshots, and when you hover over it will have a title of the project and a github link to the projects github on click

import React from "react";
import MainProjects from "./MainProjects";
import SideProjects from "./SideProjects";

const projectStyles = {
  projectsContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  projectsTitle: {
    fontSize: "2rem",
    margin: "10px 100px",
    color: "rgb(18, 49, 101)",
  },
  projectsDisplay: {
    display: "flex",
    width: "900px",
    height: "470px",
    border: "solid rgb(46, 94, 176) 5px",
    borderRadius: "50px",
    padding: "20px",
    backgroundColor: "#fee4ff",
    marginLeft: "30px",
  },
};

const Projects = () => {
  return (
    <div style={projectStyles.projectsContainer}>
      <h1 style={projectStyles.projectsTitle}>Projects</h1>
      <div style={projectStyles.projectsDisplay}></div>
    </div>
  );
};

export default Projects;
