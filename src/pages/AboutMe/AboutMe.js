// profile pic--- img
// about me info section

// add in a technologies spot on the right
// add in a hobbies spot on the right as well

import React from "react";
import Bio from "./Bio";
import Skills from "./Skills";

// break off the bio stuff and put that into the bio module and import it back here as a component

const aboutMeStyles = {
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  infoContainer: {
    display: "flex",
  },
  aboutTitle: {
    fontSize: "2rem",
    margin: "10px 100px",
    color: "rgb(18, 49, 101)",
  },
};

// break off the aboutMe into seperate components and modules for each of the modal things, have second one on right hand side which is the tech stack, hobbies and stuff

const AboutMe = () => {
  return (
    <div style={aboutMeStyles.aboutContainer}>
      <h1 style={aboutMeStyles.aboutTitle}>About Me</h1>
      <div style={aboutMeStyles.infoContainer}>
        <Bio />
        <Skills />
      </div>
    </div>
  );
};

export default AboutMe;
