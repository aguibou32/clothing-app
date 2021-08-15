import React from "react";
import "./CustomButton.scss";

function CustomButton({ children, inverted, isGoogleSignIn, ...otherProps }) {

  return (
    <button
      type="button"
      className={`${inverted ? "invterted" : ""} ${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default CustomButton;
