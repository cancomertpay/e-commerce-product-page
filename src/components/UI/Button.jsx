import React from "react";
// styles
import classes from "./Button.module.css";

function Button({ children, onClick, className }) {
  return (
    <button
      className={`${classes.button} ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
