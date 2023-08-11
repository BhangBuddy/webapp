import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  addItemToCart,
  removeItemFromCart,
} from "../../redux/slice/cartSlice";
import cardData from "../../components/cartcard/Cardapi";
import styles from "./Cart.module.css";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const filteredCards = cardData.filter((card) =>
    cartItems.some((cartItem) => cartItem.id === card.id)
  );
  const handleAddToCart = (id) => {
  dispatch(addItemToCart(id)); // Dispatch the action with the item's id
};

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart({ id }));
  };
  return (
    <>
      <h1>Cart</h1>
      <div className={styles["card-container"]}>
        {filteredCards.map((currElem) => {
          const { id, image, name, price, description } = currElem;
          const cartItem = cartItems.find(item => item.id === id);

          return (
            <div className={styles["sub-container"]} key={id}>
              <img src={image} alt={name} />
              <div className={styles["card-data"]}>
                <p><b>{name}</b></p>
                <p><b>{price}</b></p>
                {cartItem && (
                  <div className={styles["btn-div"]}>
                    <button className={styles["pm-btn"]} onClick={() => handleAddToCart(id)}>+</button>
                    <p>Quantity: {cartItem.quantity}</p>
                    <button className={styles["pm-btn"]} onClick={() => handleRemoveFromCart(id)}>-</button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Cart;
