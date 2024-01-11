import React, { useState } from "react";
// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
// components
import ImageSlider from "../Shop/ImageSlider";
// styles
import classes from "./Product.module.css";
// custom hooks
import useDiscounter from "../../hooks/useDiscounter";
// icons
import cartIcon from "../../assets/images/icon-cart-btn.svg";
import iconMinus from "../../assets/images/icon-minus.svg";
import iconPlus from "../../assets/images/icon-plus.svg";
import Button from "../UI/Button";

function Product({
  id,
  brand,
  title,
  description,
  price,
  image,
  thumbnail,
  discount,
}) {
  // custom hook
  const { finalPrice, formattedOriginalPrice, discountedPrice } = useDiscounter(
    price,
    discount
  );

  // redux
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const countedPrice = productQty * discountedPrice;

    dispatch(
      cartActions.addItemToCart({
        id,
        brand,
        title,
        quantity: productQty,
        price: discountedPrice,
        totalPrice: countedPrice,
        thumbnail: thumbnail[0],
      })
    );
    setProductQty(1);
  };

  // states
  const [productQty, setProductQty] = useState(1);
  const increaseQty = () => {
    setProductQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (productQty === 1) {
      return;
    }
    setProductQty((prev) => prev - 1);
  };

  return (
    <>
      <div>
        <ImageSlider title={title} thumbnail={thumbnail} />
      </div>
      <div className={classes["product-container"]}>
        <div className={classes["product-header"]}>
          <h3>{brand.toLocaleUpperCase()}</h3>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={classes["price-container"]}>
          <div className={classes["final-price"]}>
            <p>{finalPrice}</p>
            {discount && (
              <div className={classes["discount"]}>{`${discount}%`}</div>
            )}
          </div>
          {discount && (
            <div className={classes["original-price"]}>
              {formattedOriginalPrice}
            </div>
          )}
        </div>
        <div className={classes.quantity}>
          <div className={classes["minus-icon"]} onClick={decreaseQty}>
            <img src={iconMinus} width={12} height={4} alt="minus-icon" />
          </div>
          <p>{productQty}</p>
          <div onClick={increaseQty}>
            <img src={iconPlus} width={12} height={12} alt="plus-icon" />
          </div>
        </div>
        <Button onClick={addToCartHandler}>
          <img width={16} src={cartIcon} alt="cart-icon" /> Add to cart
        </Button>
      </div>
    </>
  );
}

export default Product;
