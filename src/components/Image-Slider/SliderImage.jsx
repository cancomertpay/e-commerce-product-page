import React from "react";
// styles
import classes from "./SliderImage.module.css";

function SliderImage({
  index,
  currentImgIndex,
  productImages,
  title,
  onClick,
}) {
  return (
    <div
      key={index}
      className={classes.slide}
      style={{
        opacity: index === currentImgIndex ? 1 : 0,
        transition: "opacity 1s ease",
        width: index === currentImgIndex ? "100%" : "auto",
      }}
      onClick={!onClick ? null : onClick}
    >
      <img
        className={`${currentImgIndex !== index && classes["slide-hidden"]}`}
        src={productImages}
        alt={title + index}
      />
    </div>
  );
}

export default SliderImage;
