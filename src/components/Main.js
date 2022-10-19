// need an if else statement that will render the main body component

// this will be deteremined by the state of what is clicked in the navigation passed through as props

import React from "react";
import AboutMe from "../pages/AboutMe/AboutMe";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
// Don't know how to do resume because it's an onClick download
// import Resume from '../pages/Resume';

// use animations to make the whole age slide up a bit slowly and the new page slide in once clickeed on a new page-- would look good

const mainStyle = {
  main: {
    backgroundColor: "lightblue",
  },
};

const Main = () => {
  const component = <AboutMe />;

  return <main style={mainStyle.main}>{component}</main>;
};

export default Main;
