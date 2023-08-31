import React from "react";
import {Routes, Route} from "react-router-dom";
import styles from "./Admin.module.css";
import { Home, OrderDetails, Orders, ViewProducts, Navbar1 } from "../../components";
import AddProduct from "../../components/admin/addProducts/AddProduct";




const Admin = () => {

    return (
        <div className={styles.admin}>
        <div className={styles.navbar}>
        <Navbar1/>
        </div>
        <div className={styles.content}>
        <Routes>
        <Route path="home" element={<Home />} />
        <Route path="all-products" element={<ViewProducts />} />
        <Route path="add-product/:id" element={<AddProduct />} />
        <Route path="orders" element={<Orders />} />
        <Route path="order-details/:id" element={<OrderDetails />} />
        </Routes>
        </div>
        </div>
    )
}

export default Admin;