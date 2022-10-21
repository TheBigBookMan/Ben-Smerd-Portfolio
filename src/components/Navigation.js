// after submission add in a home "splash" page with like a game on it or something cool

import React from "react";
import "../styles/Navigation.css";

// will have to make a utility function for checking window width/size for responsiveness
const navigationStyles = {
  navContainer: {
    width: "500px",
    marginRight: "20px",
  },
  navList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyleType: "none",
    fontSize: "1.2rem",
  },
  navItem: {
    cursor: "pointer",
    textShadow: "2px 2px 2px rgba(0,0,0,0.1)",
    color: "rgb(46, 94, 176)",
  },
};

const Navigation = ({ pageSelected, handlePageChange }) => {
  return (
    <nav style={navigationStyles.navContainer}>
      <ul style={navigationStyles.navList}>
        <li
          onClick={() => handlePageChange("AboutMe")}
          className={pageSelected === "AboutMe" ? "active" : ""}
          style={navigationStyles.navItem}
        >
          About Me
        </li>
        <li
          onClick={() => handlePageChange("Projects")}
          className={pageSelected === "Projects" ? "active" : ""}
          style={navigationStyles.navItem}
        >
          Projects
        </li>
        <li
          onClick={() => handlePageChange("Contact")}
          className={pageSelected === "Contact" ? "active" : ""}
          style={navigationStyles.navItem}
        >
          Contact
        </li>
        <li style={navigationStyles.navItem}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
