import React from "react";
import ReactDOM from "react-dom";
// redux
import { useSelector } from "react-redux";

// components
import CartItem from "./CartItem";
import Button from "../UI/Button";

// styles
import classes from "./ShopCart.module.css";

function ShopCart({ isOpen, handleOverlayClick }) {
  const cartItems = useSelector((state) => state.cart.items);
  return isOpen
    ? ReactDOM.createPortal(
        <div
          className={classes["shop-cart-container"]}
          onClick={handleOverlayClick}
        >
          <div id="shop-cart" className={`${classes["shop-cart"]}`}>
            <div className={classes["shop-cart-header"]}>
              <h3>Cart</h3>
            </div>
            <hr />
            <div className={classes["shop-cart-body"]}>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <CartItem
                    key={item.id}
                    item={{
                      id: item.id,
                      title: item.title,
                      quantity: item.quantity,
                      total: item.totalPrice,
                      price: item.price,
                      thumbnail: item.thumbnail,
                    }}
                  />
                ))
              ) : (
                <p className={classes.empty}>Your cart is empty.</p>
              )}
            </div>
            {cartItems.length > 0 && (
              <div className={classes["checkout-button"]}>
                <Button>Checkout</Button>
              </div>
            )}
          </div>
        </div>,
        document.body
      )
    : null;
}

export default ShopCart;
