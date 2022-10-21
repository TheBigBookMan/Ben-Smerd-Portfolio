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
          <h4 style={side.projectName}>YouTrailer</h4>
          <small style={side.sideProjectInfo}>
            Collaborative entertainment app where users can search by title or
            criteria and view the trailer.
          </small>
        </li>
        <li>
          <h4 style={side.projectName}>Cafe Template</h4>
          <small style={side.sideProjectInfo}>
            Simple template for a cafe web design, built with vanilla
            Javascript.
          </small>
        </li>
        <li>
          <h4 style={side.projectName}>Weather App</h4>
          <small style={side.sideProjectInfo}>
            Third party API to show the user the weather for the city they
            searched and the next 5 days with history storage, using Javascript.
          </small>
        </li>
        <li>
          <h4 style={side.projectName}>Work Day Schedular</h4>
          <small style={side.sideProjectInfo}>
            Javascript application where user inputs, edits, deletes tasks to be
            scheduled with time tracker.
          </small>
        </li>
        <li>
          <h4 style={side.projectName}>ReadME Generator</h4>
          <small style={side.sideProjectInfo}>
            NodeJS command line will prompt users with questions that are
            relevant to their structure and content of their README. A README
            file will be generated within their folder.
          </small>
        </li>
      </ul>
    </div>
  );
};

export default SideProjects;
