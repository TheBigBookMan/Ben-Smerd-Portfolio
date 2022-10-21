// after submission add in a home "splash" page with like a game on it or something cool
// will probably need state info about what section is selected and then that's sent as props to main
// navlinks need a onClick function rather than using href src ---- react rules

import React from "react";

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
  active: {
    color: "rgb(18, 49, 101)",
    textDecoration: "underline",
    cursor: "pointer",
  },
};

const Navigation = () => {
  return (
    <nav style={navigationStyles.navContainer}>
      <ul style={navigationStyles.navList}>
        <li style={(navigationStyles.navItem, navigationStyles.active)}>
          About Me
        </li>
        <li style={navigationStyles.navItem}>Projects</li>
        <li style={navigationStyles.navItem}>Contact</li>
        <li style={navigationStyles.navItem}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
