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
  credentialsContainer: {
    border: "solid 1px black",
    width: "80%",
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
  location: {
    fontStyle: "italic",
  },
  bioText: {
    width: "400px",
  },
};

const Bio = () => {
  return (
    <div style={bioStyles.bioContainer}>
      <div style={bioStyles.bioInfo}>
        <img src={Me} alt="me-portrait" style={bioStyles.img} />
        <h1>
          Ben Smerd <small>(Smerdy)</small>
        </h1>
        <h3 style={bioStyles.location}>Adelaide, South Australia</h3>
        <p style={bioStyles.bioText}>
          27 year old Full-Stack Web Developer graduated from The University of
          Adelaide Coding Bootcamp in 2022.
        </p>
      </div>
      <div style={bioStyles.credentialsContainer}></div>
    </div>
  );
};

export default Bio;
