import React, { useState } from "react";
import classes from "./Navbar.module.css";
import menuIcon from "../../assets/images/icon-menu.svg";
import MobileNavLinks from "./MobileNavLinks";
import NavLinksIcon from "../UI/Icons/NavLinksIcon";

function Navbar() {
  const [toggleNavlinks, setToggleNavlinks] = useState(false);

  const NavlinksOpenHandler = () => {
    setToggleNavlinks(true);
  };

  const navlinksCloseHandler = () => {
    setToggleNavlinks(false);
  };
  return (
    <nav className={classes.navbar}>
      <NavLinksIcon onClick={NavlinksOpenHandler} />
      {/* mobile */}
      <MobileNavLinks isOpen={toggleNavlinks} onClose={navlinksCloseHandler}>
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </MobileNavLinks>
      {/* desktop */}
    </nav>
  );
}

export default Navbar;
