import React from 'react'
import styles from './Footer.module.css';
import logo from "../../assets/bhangola-logo.png";
import { NavLink } from 'react-router-dom';

const date = new Date()
const year = date.getFullYear()

const Footer = () => {
  return (
    <>    
    <div className={styles["footer"]}>

    <div className={styles["sub-container"]}>
    <img className={styles.logo} src={logo} alt="bhangola logo" />
    <div className={styles["sub-container-1"]}>
    <p>
      Ashok nagar, 
      <br />Roorkee, Uttarakhand,
      247667
    </p>
    <p>
      (434) 546-4356
    </p>
    </div>
    <div className={styles["sub-container-2"]}>
    <p>Information</p>
    <ul>
      <li>
        <NavLink>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink>
          About
        </NavLink>
      </li>
      <li>
        <NavLink>
          Ingredients
        </NavLink>
      </li>
    </ul>
    </div>
    <div className={styles["sub-container-2"]}>
    <p>Company</p>
    <ul>
      <li>
        <NavLink>
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink>
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink>
          Ingredients
        </NavLink>
      </li>
    </ul>
    </div>
    <div className={styles["sub-container-2"]}>
    <p>Contact</p>
    <ul>
      <li>
        <NavLink>
        Shipping
        </NavLink>
      </li>
      <li>
        <NavLink>
          Store Policy
        </NavLink>
      </li>
      <li>
        <NavLink>
          FAQ
        </NavLink>
      </li>
    </ul>
    </div>
    </div>

    <div className={styles["last-container"]}>
    &copy; {year} All Rights Reserved
    </div>
    </div>
    </>

  )
}

export default Footer;