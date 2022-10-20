import React, { useState } from "react";
import "./styles/Form.css";
import validateEmail from "./utils";
import { formStyles } from "./styles/FormInline";

// could make the submit button do some antimation after submitting the form
// could put in an automatic sender to my email when click submit button

const Form = () => {
  const [submission, setSubmission] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    const { target } = e;
    const inputValue = target.value;
    const inputType = target.name;

    if (inputType === "username") {
      setUserName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError(true);
      return;
    }

    if (!userName || !email || !message) {
      return;
    } else {
      setUserName("");
      setEmail("");
      setMessage("");
      setSubmission(false);
      setError(false);
    }
  };

  return (
    <form style={formStyles.formContainer}>
      <label htmlFor="username">
        <h2 style={formStyles.formTitles}>Name:</h2>
        <br></br>
        <input
          className="inputName"
          style={formStyles.inputBox}
          value={userName}
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          name="username"
          required
        ></input>
      </label>

      <label htmlFor="email">
        <h2 style={formStyles.formTitles}>Email:</h2>
        <br></br>
        <input
          className="inputEmail"
          style={formStyles.inputBox}
          value={email}
          onChange={handleInputChange}
          type="email"
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
          value={message}
          onChange={handleInputChange}
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
          onClick={submitForm}
        >
          <h2 style={formStyles.formTitles}>Submit</h2>
        </button>
      ) : (
        <h1 style={formStyles.formTitles}>Thank you!</h1>
      )}
      {error && <h3>Incorrect email format</h3>}
    </form>
  );
};

export default Form;
