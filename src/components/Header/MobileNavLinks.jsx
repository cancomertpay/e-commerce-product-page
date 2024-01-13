import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileNavLinks.module.css";
import closeIcon from "../../assets/images/icon-close.svg";
import CloseIcon from "../UI/Icons/CloseIcon";

function Navlinks({ isOpen, onClose, children, className }) {
  return isOpen
    ? ReactDOM.createPortal(
        <div className={`${classes["nav-links-container"]} ${className && className}`}>
          <div className={classes["nav-links"]}>
            <div className={classes.close} onClick={onClose}>
              <CloseIcon />
            </div>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Navlinks;
