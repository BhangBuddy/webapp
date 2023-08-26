import React from 'react'
import styles from './Navbar.module.css';
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const activeLink = ({isActive}) => 
(isActive ? `${styles.active}` : "")

const Navbar = () => {


  return (
    <>
      <div className={styles.navbar}>
      <div className={styles.user}>
      <FaUserCircle size={40} color='#fff' />
      Bhangola
      </div>
      <nav className={styles.profile}>
      <ul> 
        <li>
          <NavLink to="/profile/personalinfo" className={activeLink}>
            Personal Information
          </NavLink>
          </li>
       <li>
       <NavLink to="/profile/billing" className={activeLink}>
            Billing & Payments
          </NavLink>
       </li>
         <li>
         <NavLink to="/profile/orderhistory" className={activeLink}>
          Order History
          </NavLink>
         </li>
       
      </ul>
      </nav>
      </div>
    </>
  )
}

export default Navbar