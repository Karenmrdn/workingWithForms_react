import React from "react";

const ValidatedInput = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
      {props.hasError && <p className="error-text">{props.errorMessage}</p>}
    </div>
  );
};

export default ValidatedInput;
