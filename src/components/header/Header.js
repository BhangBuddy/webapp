import styles from "./Header.module.css";
import logo from "../../assets/bhangola-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";

const Header = () => {
  const [displayName, setDisplayName] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Tells about currently signed in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.displayName === null) {
          const u1 = user.email.substring(0, user.email.indexOf("@"));
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
          setDisplayName(uName);
        } else {
          setDisplayName(user.displayName);
        }

        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayName,
            userID: user.uid,
          })
        );
      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER());
      }
    });
  }, [dispatch, displayName]);

  const logoutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successfully...");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <header>
      <div className={styles["top-header"]}>
        <p>
          {" "}
          Get Sustainable Products at Direct-To-Consumer Price. Free shipping on
          orders above ₹749/- only.
        </p>
      </div>
      <div className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} className={styles.logo} alt="bhangola logo" />
          </NavLink>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop Now</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <ShowOnLogout>
                <NavLink to="/login">Login</NavLink>
              </ShowOnLogout>
            </li>
            <li>
              <ShowOnLogin>
                <a href="#home" style={{ color: "#165848" }}>
                  <FaUserCircle size={16} />
                  Hi, {displayName}
                </a>
              </ShowOnLogin>
            </li>
            <li>
              <ShowOnLogin>
                <NavLink to="/" onClick={logoutUser}>
                  Logout
                </NavLink>
              </ShowOnLogin>
            </li>
            <li>
              <NavLink className={styles.cart} to="/cart">
                Cart
                <FaShoppingCart size={20} />
                <p>0</p>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles["menu-icon"]}>
          <HiOutlineMenuAlt3 size={28} />
        </div>
      </div>
    </header>
  );
};

export default Header;
