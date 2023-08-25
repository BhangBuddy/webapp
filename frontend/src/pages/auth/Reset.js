import { useState } from "react";
import styles from "./auth.module.css";
import resetImg from "../../assets/forgot.gif";
import Card from "../../components/card/Card";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import axios from "axios";


const Reset = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // const resetPassword = (e) => {
  //   e.preventDefault();
  //   setIsLoading(true);

  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       setIsLoading(false);
  //       toast.success("Check your email for a reset link");
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       toast.error(error.message);
  //     });
  // };
  const resetPassword = async (event) => {
    event.preventDefault();
    setIsLoading(true);
  
    try {
      const res = await axios.post("http://localhost:8000/forget-password", { email });
      // console.log(res)
      if(res.data.status===true){
        toast.success("Email sent check your invox");
        setEmail("")
      }else if(res.data.status===false){
        toast.error(res.data.message);
        event.target.reset()
        // e.target.value=""
        // setEmail("")
      }else{
        toast.error("something went wrong");
        event.target.reset();
        // setEmail("")
       
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error while resetting password:", error);
      setIsLoading(false);
    }
  };
  
  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={resetImg} alt="Reset Password" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>
            <form onSubmit={resetPassword}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="--btn --btn-primary --btn-block" type="submit">
                Reset Password
              </button>
              <div className={styles.links}>
                <p>
                  <Link to="/login">- Login</Link>
                </p>
                <p>
                  <Link to="/register">- Register</Link>
                </p>
              </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  );
};
export default Reset;
