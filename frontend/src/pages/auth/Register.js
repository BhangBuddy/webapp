import { useState } from "react";
import styles from "./auth.module.css";
import registerImg from "../../assets/register.gif";
import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import { Link, useNavigate } from "react-router-dom";
// import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import axios, {Axios} from "axios"

const Register = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  /*const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password !== cPassword) {
      toast.error("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        setIsLoading(false);
        toast.success("Registration successfull...");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };*/
// console.log(email)
  const register=async(e)=>{
    e.preventDefault();
    const data={
      email,
      password,
      confirmPassword:cPassword
    }
    try{
      const res = await axios.post("http://localhost:8000/create",data)
      console.log(res.data);
      if(res.data.status===true){
        toast.success(res.data.message);
        navigate("/verify",{
          state:{
            email:email
          }
        })
      }else if(res.data.status===false){
        toast.error(res.data.message)
      }else{
        toast.error("something went wrong try again")
      }
    }
   catch(err){
   console.log(err)
   }
    
  }

  return (
    <>
      <section className={`container ${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>
            <form onSubmit={register}>
              <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Email"
                required
                name="email"
              />
              <input
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password"
                required
                name="password"
              />
              <input
                type="password"
                onChange={(e)=>setCPassword(e.target.value)}
                placeholder="Confirm Password"
                required
                name="password2"
              />
              <button className="--btn --btn-primary --btn-block" type="submit">
                Register
              </button>
            </form>
            <span className={styles.register}>
              <p>Already have an account?</p>
              <Link to="/login">Login</Link>
            </span>
          </div>
        </Card>
        <div className={styles.img}>
          <img src={registerImg} alt="Register" width="400" />
        </div>
      </section>
    </>
  );
};
export default Register;
