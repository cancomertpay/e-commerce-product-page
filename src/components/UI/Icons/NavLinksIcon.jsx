import React from "react";
import classes from "./NavLinksIcon.module.css";

function NavLinksIcon(props) {
  return (
    <svg onClick={props.onClick} className={classes["nav-links-icon"]} width="16" height="15" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default NavLinksIcon;
