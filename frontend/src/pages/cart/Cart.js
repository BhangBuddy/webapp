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
      <div className={styles["cart-container"]}>
        {filteredCards.map((currElem) => {
          const { id, image, name, price, description } = currElem;
          const cartItem = cartItems.find(item => item.id === id);

          return (
            <div className={styles["cart-sub"]} key={id}>
              <img src={image} alt={name} />
              <div className={styles["cart-carddata"]}>
                <h1>{name}</h1>
                <h2>{price}</h2>
                <p>{description} </p>
                {cartItem && (
                  <div className={styles["btn-div"]}>
                    <h4>Quantity:</h4>
                    <div className={styles["green-div"]}>
                    <h3 className={styles["pm-btn"]} onClick={() => handleRemoveFromCart(id)}>{"<"}</h3>
                    <p >{cartItem.quantity}</p>
                    <h3 className={styles["pm-btn"]} onClick={() => handleAddToCart(id)}>{">"}</h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
        <button className={styles["buy-btn"]}> Buy Now </button>
    </>
    );
  };

export default Cart;
