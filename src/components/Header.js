// conatins the title of my name with the navigation bar in it
import React from "react";
import "../styles/Header.css";
import Me from "../images/Me.jpg";

const Header = () => {
  return (
    <header id="header-container">
      <div className="hero-container">
        <img src={Me} alt="self-portrait" id="hero-portrait" />
        <h1 id="hero-name">Ben Smerd</h1>
      </div>
    </header>
  );
};

export default Header;
