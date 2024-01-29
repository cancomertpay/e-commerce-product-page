import React from "react";
// styles
import classes from "./Thumbnail.module.css";

function Thumbnail({ index, currentImgIndex, image, handleThumbnailClick }) {
  return (
    <span
      className={`${classes["thumbnail"]} ${
        index === currentImgIndex ? classes["active-border"] : ""
      }`}
      onClick={() => handleThumbnailClick(index)}
    >
      <img
        className={index === currentImgIndex ? classes.active : ""}
        src={image}
        alt={`Product thumbnail image - ${index}`}
      />
    </span>
  );
}

export default Thumbnail;
