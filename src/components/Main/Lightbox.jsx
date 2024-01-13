import React from "react";
import ReactDOM from "react-dom";
// components
import CloseIcon from "../UI/Icons/CloseIcon";
// styles
import classes from "./Lightbox.module.css";

function LightBox({isOpen= false, images}) {
  return isOpen
    ? ReactDOM.createPortal(
        <div className={classes["lightbox-container"]}>
          <div className={classes.lightbox}>
            <div>
              <CloseIcon />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default LightBox;
