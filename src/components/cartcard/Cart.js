import React from 'react'
import styles from './Cart.module.css';
import cardData from './Cardapi';
import { Link } from 'react-router-dom';



const Cart = () => {

 
  return (
    <section className={styles["main-card"]}>
    <h1>Bhangola Hemp Products</h1>
    <div className={styles["card-container"]}>
    {
        cardData.map((currElem, index) => {
            const {id, image, name, category, price, description} = currElem;
            return (
                <div className={styles["sub-container"]} key={id}>
                <Link to={`/product-details/${id}`}>
                <img src={image} alt={name} />
                </Link>
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