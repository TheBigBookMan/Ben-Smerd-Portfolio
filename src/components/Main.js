// need an if else statement that will render the main body component

// this will be deteremined by the state of what is clicked in the navigation passed through as props

import React, { useState, useEffect } from "react";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";
import Header from "./Header";
import { mainStyle as style } from "../styles/MainStyle";
// Don't know how to do resume because it's an onClick download
// import Resume from '../pages/Resume';

// use animations to make the whole age slide up a bit slowly and the new page slide in once clickeed on a new page-- would look good

const Main = () => {
  const [pageSelected, setPageSelected] = useState("AboutMe");

  const handlePageChange = (page) => setPageSelected(page);

  const renderPage = () => {
    if (pageSelected === "Projects") {
      return <Projects />;
    }
    if (pageSelected === "Contact") {
      return <Contact />;
    }
    if (pageSelected === "AboutMe") {
      return <AboutMe />;
    }
  };

  return (
    <main style={style.main}>
      <Header pageSelected={pageSelected} handlePageChange={handlePageChange} />
      {renderPage()}
    </main>
  );
};

export default Main;
