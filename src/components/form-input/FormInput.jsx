import React from "react";
import "./FormInput.scss";

function FormInput({ handleChange, label, ...otherProps }) {
  // console.log("other props");
  // console.log(otherProps);

  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />

      {label ? (
        <label className={`${otherProps.value.length ? "shrink" : ""}`}>
          {label}
        </label>
      ) : null}
      
    </div>
  );
}

export default FormInput;
