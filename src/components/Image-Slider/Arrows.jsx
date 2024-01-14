import React from "react";
// icons
import nextIcon from "../../assets/images/icon-next.svg";
import prevIcon from "../../assets/images/icon-previous.svg";
// styles
import classes from "./Arrows.module.css";
import NextIcon from "../UI/Icons/NextIcon";
import PrevIcon from "../UI/Icons/PrevIcon";

function Arrows({ prevImage, nextImage, arrowsHidden = false }) {
  return (
    <React.Fragment>
      <div
        className={`${classes.arrow} ${classes.left} ${
          arrowsHidden ? classes["arrows-hidden"] : ""
        }`}
        onClick={prevImage}
      >
        {/* <img src={prevIcon} alt="prev-icon" /> */}
        <PrevIcon />
      </div>
      <div
        className={`${classes.arrow} ${classes.right} ${
          arrowsHidden ? classes["arrows-hidden"] : ""
        }`}
        onClick={nextImage}
      >
        {/* <img src={nextIcon} alt="next-icon" /> */}
        <NextIcon />
      </div>
    </React.Fragment>
  );
}

export default Arrows;
