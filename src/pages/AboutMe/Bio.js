import React from "react";
import Me from "../../images/Me.jpg";

const bioStyles = {
  bioContainer: {
    display: "flex",
    width: "900px",
    height: "460px",
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
    color: "#10c6ef",
  },
  bioText: {
    width: "400px",
  },
};

const credentialStyles = {
  credentialsContainer: {
    width: "80%",
    lineHeight: "30px",
  },
  education: {
    marginLeft: "10px",
  },
  educationTitle: {
    color: "rgb(46, 94, 176)",
  },
  educationList: {
    listStyleType: "none",
  },
  educationName: {
    fontStyle: "italic",
    color: "#10c6ef",
  },
  educationText: {
    letterSpacing: "1px",
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
                - MERN stack- MongoDB, ExpressJS, ReactJS and NodeJS. <br></br>-
                Understanding of fundamental web development and software
                engineering concepts. <br></br>- Working independently and
                collaboratively on studying and building projects.
              </p>
            </li>
            <li>
              <h3 style={credentialStyles.educationName}>
                RMIT- Masters of Justice & Criminology- 2019-2020:
              </h3>
              <p style={credentialStyles.educationText}>
                - Thorough researching in relevant areas, such as Google,
                Official Documentation, Books. <br></br>- Goal-orientated
                achievements based on finishing academic work.
                <br></br>- Curiosity to continuously learn and develop skills.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Bio;
