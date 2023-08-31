import { useEffect, useState } from "react";
import styles from "./auth.module.css";
import loginImg from "../../assets/login.gif";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";


const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]= useState("")
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [user,setUser] =useState(false);

  // useEffect(()=>{
  //   const log=async ()=>{
  //     const token= await localStorage.getItem('token');
  //     try{
  //      const res=await axios.get("http://localhost:8000/login",{
  //       headers:{
  //         Authorization:`Bearer ${token}`
  //       }
  //     });
  //     console.log(res)
  //       if(res.data.status === true){

  //         setUser(true)
          
  //       }
  //       else{
  //         setUser(false)
  //       }
  //     }catch(error){
  //       console.log(error);
  //     }
  //   }
  //   log();
  // },[])

  // if(user){
  //   navigate('/')
  // }
  /*const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const signIn= async(e)=>{
    e.preventDefault();
    const data={
      email,
      password
  }
    try{
    const res= await axios.post("http://localhost:8000/create-session",data);
     if(res.data.status){
      navigate('/')
      toast.success(res.data.message);
    
     }
     
    }catch(error){
      toast.error("Invalid user and password")
    }

  } 
  /*
  // const previousURL = useSelector(selectPreviousURL);
  const navigate = useNavigate();

  // const redirectUser = () => {
  //   if (previousURL.includes("cart")) {
  //     return navigate("/cart");
  //   }
  //   navigate("/");
  // };

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setIsLoading(false);
        toast.success("Login Successful...");
        // redirectUser();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login Scussefully");
        // redirectUser();
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };*/
  const logi = async (e) => {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      const res = await axios.post("http://localhost:8000/create-session", { email, password});
      console.log(res)
      
      if (res.data.status === true) {
        window.location.href="/";
        // navigate("/");
        localStorage.setItem('token',res.data.token);
        toast.success("Logged in successfully");
      } else {
        toast.error("Incorrect email or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("An error occurred while logging in");
    } finally {
      setIsLoading(false);
    }
  };
  




  return (
    <>
    {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <form onSubmit={logi}>
           
              <input
                type="email"
                placeholder="Email"
                required
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                name="email"
              />
              <input
                type="password"
                placeholder="Password"
                required
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
               name="password"
              />
              <button className="--btn --btn-primary --btn-block" type="submit">
                Login
              </button>
              <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
              </div>
              <p>-- or --</p>
            </form>
            <button
              className="--btn --btn-danger --btn-block"
               
            >
               <Link to="http://localhost:8000/auth/google" style={{textDecoration:'none'}}>
              <FaGoogle color="white" /> Login With Google
              </Link>
            </button>
            <span className={styles.register}>
              <p>Don't have an account?</p>
              <Link to="/register">Register</Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};
export default Login;
