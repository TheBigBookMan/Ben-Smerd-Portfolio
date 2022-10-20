import React from "react";

const formStyles = {};

// name, email and message textbox
// could put in an automatic sender to my email when click submit button
// will need a regex for the match email so it actually works

const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Your Name" name="name" required></input>
      <input type="text" placeholder="Your Email" name="email" required></input>
      <textarea
        placeholder="Enter your message"
        name="message"
        required
      ></textarea>
    </form>
  );
};

export default Form;
