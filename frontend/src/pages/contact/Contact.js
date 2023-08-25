import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_32bymb7",
        "template_4t7q10j",
        form.current,
        "5Q97n1dxlS2tEyxUu"
      )
      .then(
        (result) => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
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
            <form ref={form} onSubmit={sendEmail}>
              <div className={styles["users"]}>
                <input type="text" placeholder="Name" name="user_name" required />
                <input type="email" placeholder="Email" name="user_email" required />
              </div>
              <div className={styles["users"]}>
                <input type="text" placeholder="Subject" required name="subject" />
                <input type="tel" placeholder="Contact Number" name="phone" required />
              </div>

              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                placeholder="write your message"
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
