// has a list of project screenshots, and when you hover over it will have a title of the project and a github link to the projects github on click

import React from "react";
import MainProjects from "./MainProjects";
import SideProjects from "./SideProjects";
import { projectStyles as style } from "./styles/ProjectStyles";

const Projects = () => {
  return (
    <div style={style.projectsContainer}>
      <h1 style={style.projectsTitle}>Projects</h1>
      <div style={style.display}>
        <MainProjects />
        <SideProjects />
      </div>
    </div>
  );
};

export default Projects;
