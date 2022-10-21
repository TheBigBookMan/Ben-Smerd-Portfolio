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
  display: {
    display: "flex",
  },
};

const Projects = () => {
  return (
    <div style={projectStyles.projectsContainer}>
      <h1 style={projectStyles.projectsTitle}>Projects</h1>
      <div style={projectStyles.display}>
        <MainProjects />
        <SideProjects />
      </div>
    </div>
  );
};

export default Projects;
