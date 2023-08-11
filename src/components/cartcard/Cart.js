import React, { useState } from "react";
import styles from "./Cart.module.css";
import cardData from "./Cardapi";
import { UseSelector, useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slice/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  // console.log(data);

  return (
    <section>
      <h1>Bhangola Hemp Products</h1>
      <div className={styles["card-container"]}>
        {cardData.map((currElem, index) => {
          const { id, image, name, category, price, description } = currElem;
          const handleAddToCart = () => {
            dispatch(addItemToCart(id)); // Dispatch the action with the item's id
          };

          return (
            <div className={styles["sub-container"]} key={id}>
              <img src={image} alt={name} />
              <div className={styles["card-data"]}>
                <p>
                  <b>{name}</b>
                </p>
                <p>
                  <b>{price}</b>
                </p>
              </div>
              <button onClick={handleAddToCart} className={styles["cart-btn"]}>Add To Cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
