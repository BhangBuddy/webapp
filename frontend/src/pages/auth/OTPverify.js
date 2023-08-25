import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import loginImg from "../../assets/login.gif";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "./auth.module.css";
import Card from "../../components/card/Card";
import OtpInput from "react-otp-input";
function OTPverify() {
  const [verificationCode, setVerificationCode] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const verify = async (e) => {
    e.preventDefault();
    console.log(verificationCode);
    try {
      const res = await axios.post("http://localhost:8000/verify", {
        email:location.state.email,
        verificationCode,
      });
      if (res.data.status === true) {
        navigate("/login");
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
        return;
      }
    } catch (error) {
      toast.error("error in verify code ");
    }
  };

  return (
    <section className={`container ${styles.auth}`}>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" width="400" />
      </div>
      <Card>
        <div
          className={styles.form}
          style={{
            boxSizing: "content-box",
          }}
        >
          <h2>OTP</h2>
          <form onSubmit={verify}>
            <OtpInput
              value={verificationCode}
              onChange={setVerificationCode}
              numInputs={6}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputStyle={{
                boxSizing: "inherit",
              }}
            />
            <button className="--btn --btn-primary --btn-block" type="submit">
              Verify
            </button>
            <div className={styles.links}>
              <Link to="/reset">Reset Password</Link>
            </div>
          </form>

          <span className={styles.register}>
            <p>Don't have an account?</p>
            <Link to="/register">Register</Link>
          </span>
        </div>
      </Card>
    </section>
  );
}

export default OTPverify;
