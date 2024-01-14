import React, { useEffect, useState } from "react";
// styles
import classes from "./ImageSlider.module.css";
// components
import Thumbnail from "./Thumbnail";
import Arrows from "./Arrows";
import SliderImage from "./SliderImage";
import Lightbox from "./Lightbox";

function ImageSlider({
  images,
  thumbnails,
  title,
  desktop = false,
  isInLightbox = false,
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const nextImage = () => {
    if (currentImgIndex < images.length - 1) {
      setCurrentImgIndex((prev) => prev + 1);
    } else {
      setCurrentImgIndex(0);
    }
  };

  const prevImage = () => {
    setCurrentImgIndex((prev) => prev - 1);
    if (currentImgIndex === 0) {
      setCurrentImgIndex(images.length - 1);
    }
  };

  const handleThumbnailClick = (index) => {
    setCurrentImgIndex(index);
  };

  useEffect(() => {
    const playSlide = setInterval(nextImage, 5000);

    return () => {
      clearInterval(playSlide);
    };
  }, [currentImgIndex]);

  // lightbox codes below
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    if (window.innerWidth < 1000) {
      // won't open on sm-md devices
      setIsLightboxOpen(false);
      return;
    }
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <div>
      {/* slider Images */}
      <div className={`${classes.slider}`}>
        {images.map((productThumbnail, index) => (
          <SliderImage
            key={index}
            index={index}
            productThumbnail={productThumbnail}
            currentImgIndex={currentImgIndex}
            title={title}
            onClick={!isInLightbox && openLightbox}
          />
        ))}
        {/* arrows */}
        <Arrows
          arrowsHidden={!isInLightbox}
          prevImage={prevImage}
          nextImage={nextImage}
        />
        {/* thumbnails */}
        <div
          className={`${!desktop ? classes["mobile-hidden"] : ""} ${
            classes["thumbnails-container"]
          }`}
        >
          {thumbnails.map((image, index) => (
            <Thumbnail
              key={index}
              image={image}
              index={index}
              currentImgIndex={currentImgIndex}
              handleThumbnailClick={handleThumbnailClick}
            />
          ))}
        </div>
      </div>
      {/* lightbox (lg-devices only) */}
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={images}
        thumbnails={thumbnails}
        title={title}
      />
    </div>
  );
}

export default ImageSlider;
