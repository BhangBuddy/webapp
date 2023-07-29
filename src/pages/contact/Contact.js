import React from 'react'
import styles from './Contact.module.css';


const Contact = () => {
  return (
  <section className={styles["contact-container"]}>
  <div className={styles["sub-container"]}>
  <h2>Contact Us</h2>
  <p>Send us your queries/concerns/feedback using 
  <br />the contact 
  from below and we will respond as
   soon as possible.</p>

  <div className={styles["sub-container-1"]}>
  <div className={styles["sub-1"]}>

  <div className={styles["info-1"]}>
  <h3>Contact Information</h3>
  <p>How can we help you</p>
  </div>
  <div className={styles["info-2"]}>
  <p>91+89089034</p>
  <p>demo@gmail.com</p>
  <p>Ashok nagar,
Roorkee, Uttarakhand, 247667</p>
  </div>
  <div className={styles["circle"]}>
  </div>
  </div>

  <div className={styles["sub-2"]}>
  <form >
    <div className={styles["users"]}>
    <input 
  type="text" 
  placeholder='First Name'
  required
  />
   <input 
  type="text" 
  placeholder='Last Name'
  required
  />
    </div>
    <div className={styles["users"]}>
    <input 
  type="email" 
  placeholder='Email'
  required
  />
   <input 
  type="tel"
  placeholder='Contact Number'
  required
  />
    </div>

    <textarea name="message" 
    id="" cols="30" rows="10"
    placeholder='write your message'
    ></textarea>


    <button className={styles["contact-button"]}>
      Send Message
    </button>

  </form>
  </div>



  </div>

  </div>
   </section>
  )
}

export default Contact