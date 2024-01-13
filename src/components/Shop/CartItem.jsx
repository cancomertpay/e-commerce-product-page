import React from "react";
// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
// styles
import classes from "./CartItem.module.css";
// icons
import deleteIcon from "../../assets/images/icon-delete.svg";
// utils
import currencyFormatter from "../../utils/currencyFormatter";

function CartItem(props) {
  const { id, title, price, total, quantity, thumbnail } = props.item;
  const dispatch = useDispatch();

  const formattedPrice = currencyFormatter(price);
  const formattedTotalPrice = currencyFormatter(total);

  const handleRemoveItem = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  return (
    <div className={classes["cart-item"]}>
      <span className={classes.thumbnail}>
        <img src={thumbnail} alt={title} />
      </span>
      <div className={classes["product-details"]}>
        <span className={classes["product-details_title"]}>{title}</span>
        <div className={classes["product-details-price-group"]}>
          <span className={classes["product-details_price"]}>
            {formattedPrice}
          </span>
          <span className={classes["x"]}>x</span>
          <span className={classes["product-details_qty"]}>{quantity}</span>
          <span className={classes["product-details_total"]}>
            {formattedTotalPrice}
          </span>
        </div>
      </div>
      <div className={classes.delete} onClick={handleRemoveItem}>
        <img src={deleteIcon} alt="delete-icon" />
      </div>
    </div>
  );
}

export default CartItem;
