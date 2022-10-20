import React from "react";

const formStyles = {
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginLeft: "20px",
  },
  inputBox: {
    height: "30px",
    fontSize: "1.2rem",
    paddingLeft: "5px",
  },
  messageBox: {
    fontSize: "1.2rem",
    paddingLeft: "5px",
  },
  submitBox: {
    height: "60px",
    width: "150px",
    borderRadius: "30px",
  },
  formTitles: {
    color: "rgb(46, 94, 176)",
  },
};

// name, email and message textbox
// could put in an automatic sender to my email when click submit button
// will need a regex for the match email so it actually works

const Form = () => {
  return (
    <form style={formStyles.formContainer}>
      <label htmlFor="name">
        <h2 style={formStyles.formTitles}>Name:</h2>
        <br></br>
        <input
          style={formStyles.inputBox}
          type="text"
          placeholder="Your Name"
          name="name"
          required
        ></input>
      </label>

      <label htmlFor="email">
        <h2 style={formStyles.formTitles}>Email:</h2>
        <br></br>
        <input
          style={formStyles.inputBox}
          type="text"
          placeholder="Your Email"
          name="email"
          required
        ></input>
      </label>

      <label htmlFor="message">
        <h2 style={formStyles.formTitles}>Message:</h2>
        <br></br>
        <textarea
          style={formStyles.messageBox}
          placeholder="Enter your message"
          name="message"
          required
          rows="6"
          cols="30"
        ></textarea>
      </label>

      <button style={formStyles.submitBox} type="submit" name="submit">
        <h2 style={formStyles.formTitles}>Submit</h2>
      </button>
    </form>
  );
};

export default Form;
