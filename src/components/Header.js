// conatins the title of my name with the navigation bar in it
import React from "react";
import close from "../images/close.jpg";
import Navigation from "./Navigation";
import { headerStyles as style } from "../styles/HeaderStyle";

// will have to make a utility function for checking window width/size for responsiveness

const Header = ({ pageSelected, handlePageChange }) => {
  return (
    <header style={style.headerContainer}>
      <div style={style.heroContainer}>
        <img src={close} alt="self-portrait" style={style.heroPortrait} />
        <h1 style={style.heroName}>Ben Smerd</h1>
      </div>
      <Navigation
        pageSelected={pageSelected}
        handlePageChange={handlePageChange}
      />
    </header>
  );
};

export default Header;
