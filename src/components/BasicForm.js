import React from "react";
import useInput from "../hooks/_use-input-Reducer";
import ValidatedInput from "./ValidatedInput";

const checkIfNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(checkIfNotEmpty);

  const {
    value: lastName,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(checkIfNotEmpty);

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => checkIfNotEmpty(value) && value.includes("@"));

  let formIsValid = false;
  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(
      `First name: ${firstName} \nLast name: ${lastName} \nE-Mail: ${email}`
    );

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <ValidatedInput
          label="First Name"
          value={firstName}
          className={firstNameClasses}
          id="firstName"
          type="text"
          onChange={firstNameChangeHandler}
          onBlur={firstNameBlurHandler}
          hasError={firstNameHasError}
          errorMessage="First name must not be empty"
        />
        <ValidatedInput
          label="Last Name"
          value={lastName}
          className={lastNameClasses}
          id="lastName"
          type="text"
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          hasError={lastNameHasError}
          errorMessage="Last name must not be empty"
        />
        <ValidatedInput
          label="E-Mail"
          value={email}
          className={emailClasses}
          id="email"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          hasError={emailHasError}
          errorMessage="E-Mail must be valid and not empty"
        />
      </div>
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
