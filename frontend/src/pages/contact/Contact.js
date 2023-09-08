import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    const data={
      email,
      name,
      message,
      phone,
      subject
    }
     try {
      const res= await axios.post('http://localhost:8000/contactus',data)
      if(res.data.status===true){
        toast.success(res.data.message)
        setEmail(" ")
        setName(" ")
        setSubject(" ")
        setPhone(" ")
        setMessage(" ")
     
      }else{
        
        toast.error(res.data.message)
      }
     } catch (error) {
      toast.error("error in send message")
     }
   
  };


  return (
    <section className={styles["contact-container"]}>
      <div className={styles["sub-container"]}>
        <h2>Contact Us</h2>
        <p>
          Send us your queries/concerns/feedback using
          <br />
          the contact from below and we will respond as soon as possible.
        </p>

        <div className={styles["sub-container-1"]}>
          <div className={styles["sub-1"]}>
            <div className={styles["info-1"]}>
              <h3>Contact Information</h3>
              <p>How can we help you</p>
            </div>
            <div className={styles["info-2"]}>
              <span>
                <FaPhoneAlt />
                <p>+91-9999999999</p>
              </span>
              <span>
                <FaEnvelope />
                <p>demo@gmail.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Ashok nagar, Roorkee, Uttarakhand, 247667</p>
              </span>
            </div>
            <div className={styles["circle"]}></div>
          </div>

          <div className={styles["sub-2"]}>
            <form  onSubmit={sendEmail}>
              <div className={styles["users"]}>
                <input type="text" placeholder="Name" name="user_name" required onChange={(e)=>setName(e.target.value)}/>
                <input type="email" placeholder="Email" name="user_email" required onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div className={styles["users"]}>
                <input type="text" placeholder="Subject" required name="subject" onChange={(e)=>setSubject(e.target.value)}/>
                <input type="tel" placeholder="Contact Number" name="phone" required onChange={(e)=>setPhone(e.target.value)} />
              </div>

              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="write your message"
                onChange={(e)=>setMessage(e.target.value)}
              ></textarea>

              <button className={styles["contact-button"]}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
