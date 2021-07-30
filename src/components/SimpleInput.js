import React from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim() !== "" && value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameIsValid || !emailIsValid) {
      return;
    }

    console.log(`Name: ${enteredName}, email: ${enteredEmail}`);

    resetName();
    resetEmail();
  };

  const nameInputClasses = nameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={handleSubmit}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Name</label>
        <input
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
        />
        {nameHasError && (
          <p className="error-text">Name input must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail</label>
        <input
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          type="email"
          id="email"
        />
        {emailHasError && (
          <p className="error-text">Email input must be valid and not empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
