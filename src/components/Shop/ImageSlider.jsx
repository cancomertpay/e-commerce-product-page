import React, { useEffect, useState } from "react";
import nextIcon from "../../assets/images/icon-next.svg";
import prevIcon from "../../assets/images/icon-previous.svg";
import classes from "./ImageSlider.module.css";

function ImageSlider({ thumbnail, title }) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  const nextImage = () => {
    if (currentImgIndex < thumbnail.length - 1) {
      setCurrentImgIndex((prev) => prev + 1);
    } else {
      setCurrentImgIndex(0);
    }
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => prev - 1);
    if (currentImgIndex === 0) {
      setCurrentImgIndex(thumbnail.length - 1);
    }
  };

  const nextIndex = () => {
    if (thumbnailIndex < thumbnail.length - 1) {
      setThumbnailIndex((prev) => prev + 1);
    } else {
      setThumbnailIndex(0);
    }
  };

  const handleThumbnailClick = (index) => {
    setThumbnailIndex(index)
  };

  useEffect(() => {
    const playSlide = setInterval(nextImage, 5000);

    return () => {
      clearInterval(playSlide);
    };
  }, [currentImgIndex]);

  useEffect(() => {
    const playSlide = setInterval(nextIndex, 5000);

    return () => {
      clearInterval(playSlide);
    };
  }, [thumbnailIndex]);

  return (
    <>
      <div className={`${classes.slider} ${classes["desktop-hidden"]}`}>
        {thumbnail.map((productThumbnail, index) => (
          <div
            key={index}
            className={classes.slide}
            style={{
              opacity: index === currentImgIndex ? 1 : 0,
              transition: "opacity 1s ease",
              width: index === currentImgIndex ? "100%" : "auto",
            }}
          >
            <img
              className={`${
                currentImgIndex !== index && classes["slide-hidden"]
              }`}
              src={productThumbnail}
              alt={title + index}
            />
          </div>
        ))}
        <div className={`${classes.arrow} ${classes.left}`} onClick={prevImage}>
          <img src={prevIcon} alt="prev-icon" />
        </div>
        <div
          className={`${classes.arrow} ${classes.right}`}
          onClick={nextImage}
        >
          <img src={nextIcon} alt="next-icon" />
        </div>
      </div>
      {/* desktop */}
      <div
        className={`${classes["thumbnail-array"]} ${classes["mobile-hidden"]}`}
      >
        <div>
          {thumbnail.map((productThumbnail, index) => (
            <div
              key={index}
              className={classes.slide}
              style={{
                opacity: index === thumbnailIndex ? 1 : 0,
                transition: "opacity 1s ease",
                width: index === thumbnailIndex ? "100%" : "auto",
              }}
            >
              <img
                className={`${
                  thumbnailIndex !== index && classes["slide-hidden"]
                }`}
                src={productThumbnail}
                alt={title + index}
              />
            </div>
          ))}
        </div>
        <div className={classes["thumbnails-container"]}>
          {thumbnail.map((item, index) => (
            <div className={`${classes["thumbnail-array-item"]} ${thumbnailIndex === index ? classes["active-border"] : ""}`} key={index}>
              <img className={thumbnailIndex === index ? classes.active : ""} onClick={() => handleThumbnailClick(index)} src={item} alt={`Product Thumbnail-${index}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ImageSlider;
