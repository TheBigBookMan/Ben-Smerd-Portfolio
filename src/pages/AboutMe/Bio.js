import React from "react";
import Me from "../../images/Me.jpg";

const bioStyles = {
  bioContainer: {
    display: "flex",
    width: "900px",
    height: "450px",
    border: "solid rgb(46, 94, 176) 5px",
    borderRadius: "50px",
    padding: "20px",
    backgroundColor: "#fee4ff",
    marginLeft: "30px",
  },
  bioInfo: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    border: "solid 2px black",
  },
  img: {
    width: "300px",
    height: "300px",
    borderRadius: "50px",
    boxShadow: "0 0 2px 4px rgba(0, 0, 0, 0.2)",
    objectFit: "cover",
  },
  name: {
    color: "rgb(46, 94, 176)",
  },
  location: {
    fontStyle: "italic",
  },
  bioText: {
    width: "400px",
  },
};

const credentialStyles = {
  credentialsContainer: {
    border: "solid 1px black",
    width: "80%",
    lineHeight: "30px",
  },
  education: {
    marginLeft: "10px",
    border: "solid black 2px",
  },
  educationTitle: {
    color: "rgb(46, 94, 176)",
  },
  educationList: {
    listStyleType: "none",
  },
  educationName: {
    fontStyle: "italic",
  },
  educationText: {
    fontWeight: "lighter",
  },
};

const Bio = () => {
  return (
    <div style={bioStyles.bioContainer}>
      <div style={bioStyles.bioInfo}>
        <img src={Me} alt="me-portrait" style={bioStyles.img} />
        <h1 style={bioStyles.name}>
          Ben Smerd <small>(Smerdy)</small>
        </h1>
        <h3 style={bioStyles.location}>Adelaide, South Australia</h3>
        <p style={bioStyles.bioText}>
          27 year old Full-Stack Web Developer graduated from Coding Bootcamp in
          2022, looking for work.
        </p>
      </div>
      <div style={credentialStyles.credentialsContainer}>
        <div style={credentialStyles.education}>
          <h2 style={credentialStyles.educationTitle}>Education</h2>
          <ul style={credentialStyles.educationList}>
            <li>
              <h3 style={credentialStyles.educationName}>
                The University of Adelaide Bootcamp: 2022
              </h3>
              <p style={credentialStyles.educationText}>
                - Main focus on the MERN stack- MongoDB, ExpressJS, ReactJS and
                NodeJS. <br></br>- Understanding of fundamental web development
                and software engineering concepts. <br></br>- Working
                independently and collaboratively on studying and building
                projects.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bio;
