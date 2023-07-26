import React from 'react'
import styles from './Header.module.css';
import logo from "../../assets/bhangola-logo.png";
import { NavLink } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {HiOutlineMenuAlt3} from 'react-icons/hi';

const Header = () => {
  return (
   <header>
   <div className={styles["top-header"]}>
    <p> Get Sustainable Products at Direct-To-Consumer Price. Free shipping on orders above ₹749/- only.</p>
   </div>
    <div className={styles.header}>
    <div className={styles.logo}>
    <NavLink to="/">
    <img src={logo} className={styles.logo} alt="bhangola logo" />
    </NavLink>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/">
          Home
          </NavLink>
        </li>
        <li>
        <NavLink to="/shop">
            Shop Now
            </NavLink>
        </li>
        <li>
        <NavLink to="/about">
            About Us
            </NavLink>
        </li>
        <li>
        <NavLink to="/contact">
            Contact
            </NavLink>
        </li>
        <li>
        <NavLink className={styles.cart} to="/cart">
            Cart
            <FaShoppingCart size={20}/>
            <p>0</p>
            </NavLink>
        </li>
      </ul>
    </nav>

    <div className={styles["menu-icon"]}>
    <HiOutlineMenuAlt3 size={28}/>
    </div>
    </div>
   </header>
  )
}

export default Header