import React from "react";
import { skillsStyles as skills } from "./styles/SkillsStyles";

const Skills = () => {
  return (
    <div style={skills.skillsContainer}>
      <h2 style={skills.skillsTitle}>Skills</h2>
      <h3 style={skills.skillsName}>Technologies</h3>
      <p style={skills.skillsText}>
        MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS), ES6 Javascript,
        JQuery, MySQL, GraphQL, TailwindCSS, Bootstrap, GitHub, GitLab, Git,
        Heroku and more.
      </p>
      <h3 style={skills.skillsName}>Concepts</h3>
      <p style={skills.skillsText}>
        OOP, PWA, Lighthouse Audits, Testing Frameworks, Responsive Design,
        ORM/ODM, CRUD, MVC and others.
      </p>
      <h3 style={skills.skillsName}>Soft Skills</h3>
      <p style={skills.skillsText}>
        Problem solving skills, emotional intelligence, leadership skills,
        strong work ethic, ability to work independently and collaboratively,
        communication skills, adaptability and curiosity to learn.
      </p>
    </div>
  );
};

export default Skills;
