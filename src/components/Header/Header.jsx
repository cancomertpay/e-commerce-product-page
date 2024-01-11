import React, { useState } from "react";
// redux
import { useSelector } from "react-redux";

// styles
import classes from "./Header.module.css";

// components
import Navbar from "./Navbar";
import ShopCart from "../Shop/ShopCart";
import UserAvatar from "../User/UserAvatar";

// logos&icons
import brandLogo from "../../assets/images/logo.svg";
import shopIcon from "../../assets/images/icon-cart.svg";

function Header() {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const handleOverlayClick = (event) => {
    if (isCartOpen && !event.target.closest("#shop-cart")) {
      setIsCartOpen(false);
    }
  };

  return (
    <header className={classes.header}>
      <div className={classes["nav-brand"]}>
        <Navbar />
        <div>
          <img src={brandLogo} alt="sneakers-logo" />
        </div>
      </div>
      <div className={classes["nav-brand"]}>
        {/* shop cart icon */}
        <div onClick={toggleCart} className={classes["shop-icon-group"]}>
          {cartQuantity && cartQuantity > 0 ? (
            <span className={classes["product-qty"]}>{cartQuantity}</span>
          ) : (
            null
          )}
          <img src={shopIcon} alt="shop-icon" />
        </div>
        <ShopCart isOpen={isCartOpen} handleOverlayClick={handleOverlayClick} />
        <UserAvatar />
      </div>
    </header>
  );
}

export default Header;
