// after submission add in a home "splash" page with like a game on it or something cool

import React from "react";
import "../styles/Navigation.css";
import { navigationStyles as style } from "../styles/NavigationStyle";

// will have to make a utility function for checking window width/size for responsiveness

const Navigation = ({ pageSelected, handlePageChange }) => {
  return (
    <nav style={style.navContainer}>
      <ul style={style.navList}>
        <li
          onClick={() => handlePageChange("AboutMe")}
          className={pageSelected === "AboutMe" ? "active" : ""}
          style={style.navItem}
        >
          About Me
        </li>
        <li
          onClick={() => handlePageChange("Projects")}
          className={pageSelected === "Projects" ? "active" : ""}
          style={style.navItem}
        >
          Projects
        </li>
        <li
          onClick={() => handlePageChange("Contact")}
          className={pageSelected === "Contact" ? "active" : ""}
          style={style.navItem}
        >
          Contact
        </li>
        <li style={style.navItem}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
