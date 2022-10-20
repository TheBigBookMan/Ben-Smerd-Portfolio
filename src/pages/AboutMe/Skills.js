import React from "react";
import { skillsStyles } from "./styles/SkillsStyles";

const Skills = () => {
  return (
    <div style={skillsStyles.skillsContainer}>
      <h2 style={skillsStyles.skillsTitle}>Skills</h2>
      <h3 style={skillsStyles.skillsName}>Technologies</h3>
      <p style={skillsStyles.skillsText}>
        MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), ES6 Javascript,
        JQuery, MySQL, TailwindCSS, Bootstrap, GitHub, GitLab, Git, Heroku and
        more.
      </p>
      <h3 style={skillsStyles.skillsName}>Concepts</h3>
      <p style={skillsStyles.skillsText}>
        Object Oriented Programming, Progressive Web Apps, Responsive Design,
        ORM/ODM, CRUD, MVC and others.
      </p>
      <h3 style={skillsStyles.skillsName}>Soft Skills</h3>
      <p style={skillsStyles.skillsText}>
        Problem solving skills, emotional intelligence, leadership skills,
        strong work ethic, ability to work independently and collaboratively,
        communication skills, adaptability and curiosity to learn.
      </p>
    </div>
  );
};

export default Skills;
