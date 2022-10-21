// has icons with links on click to github, linkedin and whatever

import React from "react";

const footerStyles = {
  iconContainer: {
    height: "61px",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "50px",
  },
  listItem: {
    listStyleType: "none",
    cursor: "pointer",
  },
};

const Footer = () => {
  return (
    <footer>
      <ul style={footerStyles.iconContainer}>
        <li style={footerStyles.listItem}>
          <i
            onClick={() => window.open("https://github.com/TheBigBookMan")}
            className="fa-brands fa-github fa-2xl"
          ></i>
        </li>
        <li style={footerStyles.listItem}>
          <i
            onClick={() => window.open("https://www.linkedin.com/in/bensmerd/")}
            className="fa-brands fa-linkedin fa-2xl"
          ></i>
        </li>
        <li style={footerStyles.listItem}>
          <i
            onClick={() => window.open("https://twitter.com/BenSmerd")}
            className="fa-brands fa-twitter fa-2xl"
          ></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
