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

const openLink = (url) => {};

const Footer = () => {
  return (
    <footer>
      <ul style={footerStyles.iconContainer}>
        <li style={footerStyles.listItem}>
          <a
            href="https://github.com/TheBigBookMan"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
        </li>
        <li style={footerStyles.listItem}>
          <a
            href="https://www.linkedin.com/in/bensmerd/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </a>
        </li>
        <li style={footerStyles.listItem}>
          <a
            href="https://twitter.com/BenSmerd"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter fa-2xl"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
