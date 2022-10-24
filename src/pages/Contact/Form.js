import React, { useState } from "react";
import "./styles/Form.css";
import validateEmail from "./utils";
import { formStyles as style } from "./styles/FormStyles";

// could make the submit button do some antimation after submitting the form
// could put in an automatic sender to my email when click submit button

const Form = () => {
  const [submission, setSubmission] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

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

    if (!userName || !message) {
      setError("Missing input");
      return;
    }

    if (!validateEmail(email)) {
      setError("Incorrect email format");
      return;
    }

    // e.target.classList.add("disappear");

    setUserName("");
    setEmail("");
    setMessage("");
    setSubmission(false);
    setError("");
  };

  return (
    <form style={style.formContainer}>
      <label htmlFor="username">
        <h2 style={style.formTitles}>Name:</h2>
        <br></br>
        <input
          className="inputName"
          style={style.inputBox}
          value={userName}
          onChange={handleInputChange}
          type="text"
          placeholder="Your Name"
          name="username"
          required
        ></input>
      </label>

      <label htmlFor="email">
        <h2 style={style.formTitles}>Email:</h2>
        <br></br>
        <input
          className="inputEmail"
          style={style.inputBox}
          value={email}
          onChange={handleInputChange}
          type="email"
          placeholder="Your Email"
          name="email"
          required
        ></input>
      </label>

      <label htmlFor="message">
        <h2 style={style.formTitles}>Message:</h2>
        <br></br>
        <textarea
          className="inputMessage"
          style={style.messageBox}
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
          style={style.submitBox}
          type="submit"
          name="submit"
          onClick={submitForm}
        >
          <h2 style={style.formTitles}>Submit</h2>
        </button>
      ) : (
        <h1 style={style.formTitles}>Thank you!</h1>
      )}
      {error}
    </form>
  );
};

export default Form;
