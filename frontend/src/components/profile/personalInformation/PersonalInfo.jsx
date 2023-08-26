import React from 'react'
import styles from './Personal.module.css';

const PersonalInfo = () => {
  return (
    <>
      <div className={styles["personal-container"]}>
      <h2>Personal Information</h2>
      <div className={styles["personal-boxes"]}>
      <div className={styles["person-box-1"]}>
      <h4>Name</h4>
      <p>Peter Parker</p>
      </div>
      <div className={styles["person-box-1"]}>
      <h4>Email</h4>
      <p>Peter123@gmail.com</p>
      </div>
      <div className={styles["person-box-1"]}>
      <h4>Phone</h4>
      <p>+91892348793</p>
      </div>
      <div className={styles["person-box-1"]}>
      <h4>Username</h4>
      <p>peter</p>
      </div>
      <div className={styles["person-box-1"]}>
      <h4>Role</h4>
      <p>not assigned</p>
      </div>
      </div>
      </div>
    </>
  )
}

export default PersonalInfo