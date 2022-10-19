// profile pic--- img
// about me info section

// add in a technologies spot on the right
// add in a hobbies spot on the right as well

import React from "react";
import Me from "../images/Me.jpg";

const aboutMeStyles = {
  aboutContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  aboutTitle: {
    fontSize: "2rem",
    margin: "10px 100px",
  },
  bioContainer: {
    display: "flex",
    flexDirection: "column",
    width: "800px",
    height: "450px",
    border: "solid rgb(46, 94, 176) 5px",
    borderRadius: "50px",
    padding: "20px",
    backgroundColor: "#fee4ff",
    marginLeft: "30px",
  },
  img: {
    width: "300px",
    height: "300px",
    borderRadius: "50px",
    boxShadow: "0 0 2px 4px rgba(0, 0, 0, 0.2)",
    objectFit: "cover",
  },
};

const AboutMe = () => {
  return (
    <div style={aboutMeStyles.aboutContainer}>
      <h1 style={aboutMeStyles.aboutTitle}>About Me</h1>
      <div style={aboutMeStyles.bioContainer}>
        <img src={Me} alt="me-portrait" style={aboutMeStyles.img} />
        <h1>Ben Smerd</h1>
        <h3>Adelaide, South Australia</h3>
        <p>Full-Stack Web Developer lorem</p>
      </div>
    </div>
  );
};

export default AboutMe;
