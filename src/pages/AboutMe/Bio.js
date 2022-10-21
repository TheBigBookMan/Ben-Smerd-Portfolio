import React from "react";
import Me from "../../images/Me.jpg";
import {
  bioStyles as bio,
  credentialStyles as credentials,
} from "./styles/BioStyles";

const Bio = () => {
  return (
    <div style={bio.bioContainer}>
      <div style={bio.bioInfo}>
        <img src={Me} alt="me-portrait" style={bio.img} />
        <h1 style={bio.name}>
          Ben Smerd <small>(Smerdy)</small>
        </h1>
        <h3 style={bio.location}>Adelaide, South Australia</h3>
        <p style={bio.bioText}>
          27 year old Full-Stack Web Developer graduated from Coding Bootcamp in
          2022, looking for work.
        </p>
      </div>
      <div style={credentials.credentialsContainer}>
        <div style={credentials.education}>
          <h2 style={credentials.educationTitle}>Education</h2>
          <ul style={credentials.educationList}>
            <li>
              <h3 style={credentials.educationName}>
                The University of Adelaide Bootcamp: 2022
              </h3>
              <p style={credentials.educationText}>
                - MERN stack- MongoDB, ExpressJS, ReactJS and NodeJS. <br></br>-
                Understanding of fundamental web development and software
                engineering concepts. <br></br>- Working independently and
                collaboratively on studying and building projects.
              </p>
            </li>
            <li>
              <h3 style={credentials.educationName}>
                RMIT- Masters of Justice & Criminology- 2019-2020:
              </h3>
              <p style={credentials.educationText}>
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
