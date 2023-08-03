import React, { useState } from 'react'
import styles from './Cart.module.css';
import cardData from './Cardapi';

const Cart = () => {

    // console.log(data);

  return (
    <section>
    <h1>Bhangola Hemp Products</h1>
    <div className={styles["card-container"]}>
    {
        cardData.map((currElem, index) => {
            const {id, image, name, category, price, description} = currElem;
            return (
                <div className={styles["sub-container"]} key={id}>
                <img src={image} alt={name} />
                <div className={styles["card-data"]}>
                <p><b>{name}</b></p>
                <p><b>{price}</b></p>
                </div>
                <button className={styles["cart-btn"]}>Add To Cart</button>
                </div>
            )
        })
    }
    </div>
    </section>
  )
}

export default Cart