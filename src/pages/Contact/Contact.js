// form with input for users name, email and required message and submit button

// got a lot of room on right so could add in a game or something intereting with animation

import React from "react";
import Form from "./Form";
import { contactStyles as style } from "./styles/ContactStyles";

const Contact = () => {
  return (
    <div style={style.contactContainer}>
      <h1 style={style.contactTitle}>Contact Me</h1>
      <div style={style.formContainer}>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
