// conatins the title of my name with the navigation bar in it
import React from "react";
// will have to change the style from stylesheet to inline style
import "../styles/Header.css";
import Me from "../images/Me.jpg";
import Navigation from "./Navigation";

const headerStyles = {
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: "40px",
    padding: "20px",
    fontFamily: "Montserrat",
  },
  heroContainer: {
    display: "flex",
  },
  heroPortrait: {
    width: "50px",
    height: "50px",
    margin: "10px",
    borderRadius: "20px",
    border: "solid 1px rgb(66, 117, 206)",
    boxShadow: "1px 1px 0 0 rgba(66, 117, 206, 0.4)",
  },
  heroName: {
    margin: "10px",
    paddingTop: "5px",
    color: "rgb(46, 94, 176)",
  },
};

const Header = () => {
  return (
    <header style={headerStyles.headerContainer}>
      <div style={headerStyles.heroContainer}>
        <img src={Me} alt="self-portrait" style={headerStyles.heroPortrait} />
        <h1 style={headerStyles.heroName}>Ben Smerd</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
