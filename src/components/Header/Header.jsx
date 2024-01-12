import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

// styles
import classes from "./Header.module.css";

// components
import Navbar from "./Navbar";
import ShopCart from "../Shop/ShopCart";
import UserAvatar from "../User/UserAvatar";
import ShopIcon from "../UI/Icons/ShopIcon";
// logos&icons
import brandLogo from "../../assets/images/logo.svg";
import shopIcon from "../../assets/images/icon-cart.svg";

function Header() {
  const dispatch = useDispatch();

  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  const isCartOpen = useSelector((state) => state.ui.isOpen);

  const toggleCart = () => {
    dispatch(uiActions.toggleUi());
  };

  const handleOverlayClick = (event) => {
    if (isCartOpen && !event.target.closest("#shop-cart")) {
      dispatch(uiActions.toggleUi());
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
          ) : null}
          <ShopIcon />
        </div>
        <ShopCart isOpen={isCartOpen} handleOverlayClick={handleOverlayClick} />
        <UserAvatar />
      </div>
    </header>
  );
}

export default Header;
