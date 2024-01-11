import React from "react";
import ReactDOM from "react-dom";
import classes from "./MobileNavLinks.module.css";
import closeIcon from "../../assets/images/icon-close.svg";

function Navlinks({ isOpen, onClose, children }) {
  return isOpen
    ? ReactDOM.createPortal(
        <div className={classes["nav-links-container"]}>
          <div className={classes["nav-links"]}>
            <div className={classes.close} onClick={onClose}>
              <img src={closeIcon} alt="close-icon" />
            </div>
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Navlinks;
