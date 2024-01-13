import React, { useState } from "react";
import classes from "./Navbar.module.css";
import menuIcon from "../../assets/images/icon-menu.svg";
import MobileNavLinks from "./MobileNavLinks";
import NavLinksIcon from "../UI/Icons/NavLinksIcon";

function Navbar() {
  const [toggleNavlinks, setToggleNavlinks] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const NavlinksOpenHandler = () => {
    setToggleNavlinks(true);
  };

  const navlinksCloseHandler = () => {
    setToggleNavlinks(false);
  };

  const activeHandler = (item) => {
    setActiveItem(item);
  };
  return (
    <nav className={classes.navbar}>
      <NavLinksIcon
        onClick={NavlinksOpenHandler}
        className={classes["desktop-hidden"]}
      />
      {/* mobile */}
      <MobileNavLinks
        isOpen={toggleNavlinks}
        onClose={navlinksCloseHandler}
        className={classes["desktop-hidden"]}
      >
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </MobileNavLinks>
      {/* desktop */}
      <div className={`${classes["nav-links"]} ${classes["mobile-hidden"]}`}>
        <ul>
          <li
            className={activeItem === "item1" ? classes.active : ""}
            onClick={() => activeHandler("item1")}
          >
            <div className={classes["nav-item"]}>Collections</div>
          </li>
          <li
            className={activeItem === "item2" ? classes.active : ""}
            onClick={() => activeHandler("item2")}
          >
            <div className={classes["nav-item"]}>Men</div>
          </li>
          <li
            className={activeItem === "item3" ? classes.active : ""}
            onClick={() => activeHandler("item3")}
          >
            <div className={classes["nav-item"]}>Women</div>
          </li>
          <li
            className={activeItem === "item4" ? classes.active : ""}
            onClick={() => activeHandler("item4")}
          >
            <div className={classes["nav-item"]}>About</div>
          </li>
          <li
            className={activeItem === "item5" ? classes.active : ""}
            onClick={() => activeHandler("item5")}
          >
            <div className={classes["nav-item"]}>Contact</div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
