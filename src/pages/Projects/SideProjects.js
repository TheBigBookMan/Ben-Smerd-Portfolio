import React from "react";
import { sideProjectStyles as side } from "./styles/SideStyles";

// add in github link on clicking the name title

const SideProjects = () => {
  return (
    <div style={side.sideProjectContainer}>
      <h2 style={side.projectTitle}>
        Side Projects- <small>Click project name for GitHub</small>
      </h2>
      <ul style={side.projectList}>
        <li>
          <h4 style={side.projectName}>Weather</h4>
          <small>This is a weather app using Javascript.</small>
        </li>
        <li>
          <h4 style={side.projectName}>Weather</h4>
          <small>This is a weather app using Javascript.</small>
        </li>
        <li>
          <h4 style={side.projectName}>Weather</h4>
          <small>This is a weather app using Javascript.</small>
        </li>
        <li>
          <h4 style={side.projectName}>Weather</h4>
          <small>This is a weather app using Javascript.</small>
        </li>
        <li>
          <h4 style={side.projectName}>Weather</h4>
          <small>This is a weather app using Javascript.</small>
        </li>
      </ul>
    </div>
  );
};

export default SideProjects;
