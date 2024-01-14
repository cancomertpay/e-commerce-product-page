import React, { useState, useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { uiActions } from "../../store/ui-slice";
// components
import ImageSlider from "../Image-Slider/ImageSlider";
import Button from "../UI/Button";
import MinusIcon from "../UI/Icons/MinusIcon";
import PlusIcon from "../UI/Icons/PlusIcon";
// styles
import classes from "./Product.module.css";
// custom hooks
import useDiscounter from "../../hooks/useDiscounter";
// icons
import cartIcon from "../../assets/images/icon-cart-btn.svg";
import LightBox from "../Image-Slider/Lightbox";

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
    if (productQty <= 0) {
      return;
    }

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
    setProductQty(0);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    dispatch(uiActions.toggleUi());
  };

  // states
  const [productQty, setProductQty] = useState(0);
  const [dumbAnimation, setDumbAnimation] = useState(false);

  const increaseQty = () => {
    setDumbAnimation((prev) => !prev);
    setProductQty((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (productQty === 0) {
      return;
    }
    setDumbAnimation((prev) => !prev);
    setProductQty((prev) => prev - 1);
  };

  useEffect(() => {
    const dumbAnimationTimeout = setInterval(() => {
      setDumbAnimation(false);
    }, 100);
    return () => {
      clearInterval(dumbAnimationTimeout);
    };
  }, [dumbAnimation]);

  return (
    <>
      <div>
        <ImageSlider title={title} images={image} thumbnails={thumbnail} />
      </div>
      <div className={classes["product-container"]}>
        <div className={classes["product-header"]}>
          <h3>{brand.toLocaleUpperCase()}</h3>
          <h1>{title}</h1>
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
        <div className={classes["add-to-cart-container"]}>
          <div className={classes.quantity}>
            <button aria-label="Decrease Quantity" className={classes["minus-icon"]} onClick={decreaseQty}>
              <MinusIcon />
            </button>
            <p className={`${dumbAnimation ? classes.dumb : ""}`}>
              {productQty}
            </p>
            <button aria-label="Increase Quantity" className={classes["plus-icon"]} onClick={increaseQty}>
              <PlusIcon />
            </button>
          </div>
          <Button onClick={addToCartHandler}>
            <img width={16} src={cartIcon} alt="cart-icon" /> Add to cart
          </Button>
        </div>
      </div>
    </>
  );
}

export default Product;
