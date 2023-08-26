import React from 'react'
import {Routes, Route} from "react-router-dom";
import styles from './Profile.module.css';
import { Billing, Navbar,OrderHistory, PersonalInfo } from '../../components';

const Profile = () => {
  return (
    <div className={styles.profile}>
        <div className={styles.navbar}>
        <Navbar/>
        </div>
        <div className={styles.content}>
        <Routes>
        <Route path="personalinfo" element={<PersonalInfo />} />
        <Route path="billing" element={<Billing />} />
        <Route path="orderhistory" element={<OrderHistory />} />
        </Routes>
        </div>
        </div>
  )
}

export default Profile;