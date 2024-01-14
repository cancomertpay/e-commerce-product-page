import React from "react";
import ReactDOM from "react-dom";
// components
import CloseIcon from "../UI/Icons/CloseIcon";
import ImageSlider from "./ImageSlider";
// styles
import classes from "./Lightbox.module.css";

function Lightbox({ isOpen = false, onClose, images, thumbnails, title }) {
  return isOpen
    ? ReactDOM.createPortal(
        <div className={classes["lightbox-container"]}>
          <div className={classes.lightbox}>
            <div className={classes.close} onClick={onClose}>
              <CloseIcon />
            </div>
            <div>
              <ImageSlider
                images={images}
                thumbnails={thumbnails}
                title={title}
                isInLightbox={true}
              />
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
}

export default Lightbox;
