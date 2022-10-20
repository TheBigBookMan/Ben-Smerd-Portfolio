// form with input for users name, email and required message and submit button

import React from "react";
import Form from "./Form";

const contactStyles = {
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  formContainer: {
    display: "flex",
    width: "900px",
    height: "470px",
    border: "solid rgb(46, 94, 176) 5px",
    borderRadius: "50px",
    padding: "20px",
    backgroundColor: "#fee4ff",
    marginLeft: "30px",
  },
  contactTitle: {
    fontSize: "2rem",
    margin: "10px 100px",
    color: "rgb(18, 49, 101)",
  },
};

const Contact = () => {
  return (
    <div style={contactStyles.contactContainer}>
      <h1 style={contactStyles.contactTitle}>Contact Me</h1>
      <div style={contactStyles.formContainer}>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
