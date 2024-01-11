import React from "react";
// styles
import classes from "./Button.module.css";

function Button({ children, onClick }) {
  return <button className={classes.button} onClick={onClick}>{children}</button>;
}

export default Button;
