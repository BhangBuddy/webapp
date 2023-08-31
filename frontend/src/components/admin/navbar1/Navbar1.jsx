import React from 'react'
import styles from './Navbar1.module.css';
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const activeLink = ({isActive}) => 
(isActive ? `${styles.active}` : "")

const Navbar1 = () => {


  return (
    <>
      <div className={styles.navbar}>
      <div className={styles.user}>
      <FaUserCircle size={40} color='#fff' />
     Bhangola
      </div>
      <nav>
      <ul>
        <li>
          <NavLink to="/admin/home" className={activeLink}>
            Home
          </NavLink>
          </li>
       <li>
       <NavLink to="/admin/all-products" className={activeLink}>
            View Products
          </NavLink>
       </li>
         <li>
         <NavLink to="/admin/add-product/ADD" className={activeLink}>
          Add Product
          </NavLink>
         </li>
         <li>
         <NavLink to="/admin/orders" className={activeLink}>
          Orders
          </NavLink>
         </li>
       
      </ul>
      </nav>
      </div>
    </>
  )
}

export default Navbar1;