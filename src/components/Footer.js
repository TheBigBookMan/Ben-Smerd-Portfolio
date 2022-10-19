// has icons with links on click to github, linkedin and whatever

import React from "react";

const footerStyles = {
  iconContainer: {
    height: "60px",
    backgroundColor: "lightblue",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "30px",
  },
  listItem: {
    listStyleType: "none",
  },
};

const Footer = () => {
  return (
    <footer>
      <ul style={footerStyles.iconContainer}>
        <li style={footerStyles.listItem}>
          <i className="fa-brands fa-github fa-2xl"></i>
        </li>
        <li style={footerStyles.listItem}>
          <i className="fa-brands fa-linkedin fa-2xl"></i>
        </li>
        <li style={footerStyles.listItem}>
          <i className="fa-brands fa-twitter fa-2xl"></i>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
