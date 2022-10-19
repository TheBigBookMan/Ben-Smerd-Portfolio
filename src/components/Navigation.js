// has an about me(home), projects, contact and resume
// will probably need state info about what section is selected and then that's sent as props to main
// navlinks need a onClick function rather than using href src ---- react rules

import React from "react";

const Navigation = () => {
  return (
    <nav id="nav-container">
      <ul id="nav-list">
        <li className="nav-item active">About Me</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;
