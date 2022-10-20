// conatins the title of my name with the navigation bar in it
import React from "react";
import close from "../images/close.jpg";
import Navigation from "./Navigation";

// will have to make a utility function for checking window width/size for responsiveness
const headerStyles = {
  headerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: "30px",
    padding: "20px",
    fontFamily: "Montserrat",
    borderBottom: "solid 3px rgb(66, 117, 206)",
  },
  heroContainer: {
    display: "flex",
  },
  heroPortrait: {
    width: "50px",
    height: "50px",
    margin: "10px",
    borderRadius: "20px",
    boxShadow: "1px 1px 8px 1px rgba(0,0,0, 0.4)",
    objectFit: "fill",
    cursor: "pointer",
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
        <img
          src={close}
          alt="self-portrait"
          style={headerStyles.heroPortrait}
        />
        <h1 style={headerStyles.heroName}>Ben Smerd</h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
