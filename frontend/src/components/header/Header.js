import styles from "./Header.module.css";
import { selectCartItems } from "../../redux/slice/cartSlice";
import { useSelector } from "react-redux";
import logo from "../../assets/bhangola-logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import {
  REMOVE_ACTIVE_USER,
  SET_ACTIVE_USER,
} from "../../redux/slice/authSlice";
import { toast } from "react-toastify";
import ShowOnLogin, { ShowOnLogout } from "../hiddenLink/hiddenLink";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const token = localStorage.getItem("token");
  const cartItems = useSelector(selectCartItems);
  const cartItemCount = cartItems.length;
  const cart = (
    <li>
      <NavLink className={styles.cart} to="/cart">
        Cart
        <FaShoppingCart size={20} />
        <p>{cartItemCount}</p>
      </NavLink>
    </li>
  );
  const [showMenu, setShowMenu] = useState(false);

  const [scrollPage, setScrollPage] = useState(false);
  const displayName = localStorage.getItem("username");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Tells about currently signed in user
  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       if (user.displayName === null) {
  //         const u1 = user.email.substring(0, user.email.indexOf("@"));
  //         const uName = u1.charAt(0).toUpperCase() + u1.slice(1);
  //         setDisplayName(uName);
  //       } else {
  //         setDisplayName(user.displayName);
  //       }

  //       dispatch(
  //         SET_ACTIVE_USER({
  //           email: user.email,
  //           userName: user.displayName ? user.displayName : displayName,
  //           userID: user.uid,
  //         })
  //       );
  //     } else {
  //       setDisplayName("");
  //       dispatch(REMOVE_ACTIVE_USER());
  //     }
  //   });
  // }, [dispatch, displayName]);

  const logoutUser = () => {
    localStorage.removeItem("token");
    toast.success("logout successfully");
    setTimeout(()=>{
     window.location.href="/"
    },1000)

   };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  // scrolll page

  const fixNav = () => {
    if (window.scrollY > 50) {
      setScrollPage(true);
    } else {
      setScrollPage(false);
    }
  };

  window.addEventListener("scroll", fixNav);

  const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");
  return (
    <header className={scrollPage ? `${styles.fixed}` : null}>
      <div className={styles["top-header"]}>
        <p>
          {/* {" "} */}
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
        <nav
          className={
            showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`
          }
        >
          <NavLink className={styles["menu-icon"]} to="/">
            <img
              src={logo}
              className={styles.logo}
              alt="bhangola logo"
              onClick={hideMenu}
            />
          </NavLink>
          <FaTimes
            className={styles["menu-icon"]}
            size={22}
            color="black"
            style={{
              position: "absolute",
              right: "20px",
              top: "40px",
              cursor: "pointer",
            }}
            onClick={hideMenu}
          />
          <ul>
            <li>
              <NavLink className={activeLink} to="/" onClick={hideMenu}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/shop" onClick={hideMenu}>
                Shop Now
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/about" onClick={hideMenu}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/contact" onClick={hideMenu}>
                Contact
              </NavLink>
            </li>
            {token ? <>
             
            <li>
              <>
                <NavLink to="/profile" className={activeLink}>
                  <FaUserCircle size={16} />
                  Hi, {displayName}
                </NavLink>
              </>
            </li>
            <li>
              <>
                <NavLink to="/" onClick={logoutUser}>
                  Logout
                </NavLink>
              </>
            </li>
             </>: <> 
             <li>
              <>
                <NavLink className={activeLink} to="/login" onClick={hideMenu}>
                  Login
                </NavLink>
              </>
            </li>
             
              </>}
           
            {cart}
          </ul>
        </nav>

        <div className={styles["menu-icon"]}>
          {/* {cart} */}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
