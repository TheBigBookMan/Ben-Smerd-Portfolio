import React from "react";
import { footerStyles as style } from "../styles/FooterStyle";

const Footer = () => {
  return (
    <footer>
      <ul style={style.iconContainer}>
        <li style={style.listItem}>
          <i
            onClick={() => window.open("https://github.com/TheBigBookMan")}
            className="fa-brands fa-github fa-2xl"
          ></i>
        </li>
        <li style={style.listItem}>
          <i
            onClick={() => window.open("https://www.linkedin.com/in/bensmerd/")}
            className="fa-brands fa-linkedin fa-2xl"
          ></i>
        </li>
        <li style={style.listItem}>
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
