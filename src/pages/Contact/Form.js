import React, { useState } from "react";
import "../../styles/Form.css";

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
    boxShadow: "1px 1px 2px 1px rgba(0, 0, 0, 0.5)",
    cursor: "pointer",
  },
  formTitles: {
    color: "rgb(46, 94, 176)",
  },
};

// could make the submit button do some antimation after submitting the form
// could put in an automatic sender to my email when click submit button
// will need a regex for the match email so it actually works
// On form page use state to determine if person has submitted and then can use that to determine if button or thank you

const Form = () => {
  const [submission, setSubmission] = useState(true);

  const submitThanks = (e) => {
    const inputName = e.target.name;
    console.log(inputName.value);
    e.preventDefault();
    // if (inputName.value && inputEmail.value && inputMessage.value) {
    //   setSubmission(false);
    // } else {
    //   setSubmission(true);
    // }
  };

  // need to put onChange prop which then hanles the e.target and value and sets it

  return (
    <form style={formStyles.formContainer}>
      <label htmlFor="name">
        <h2 style={formStyles.formTitles}>Name:</h2>
        <br></br>
        <input
          className="inputName"
          style={formStyles.inputBox}
          value=""
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
          className="inputEmail"
          style={formStyles.inputBox}
          defaultValue=""
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
          className="inputMessage"
          style={formStyles.messageBox}
          defaultValue=""
          placeholder="Enter your message"
          name="message"
          required
          rows="6"
          cols="30"
        ></textarea>
      </label>
      {submission ? (
        <button
          className="submitBtn"
          style={formStyles.submitBox}
          type="submit"
          name="submit"
          onClick={submitThanks}
        >
          <h2 style={formStyles.formTitles}>Submit</h2>
        </button>
      ) : (
        <h1 style={formStyles.formTitles}>Thank you!</h1>
      )}
    </form>
  );
};

export default Form;
