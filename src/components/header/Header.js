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
import { FaTimes} from 'react-icons/fa';




const cart = (
  <li>
  <NavLink className={styles.cart} to="/cart">
    Cart
    <FaShoppingCart size={20} />
    <p>0</p>
  </NavLink>
</li>
)

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [displayName, setDisplayName] = useState("");
  const [showMenu, setShowMenu] = useState(false);

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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

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


  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }
  const hideMenu = () => {
    setShowMenu(false);
  }

  const activeLink = ({isActive}) => 
(isActive ? `${styles.active}` : "")

  return (
    <header>
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
        <nav className={showMenu ? `${styles["show-nav"]}` : `${styles["hide-nav"]}`}>
        <NavLink className={styles["menu-icon"]} to="/">
            <img  src={logo} className={styles.logo} alt="bhangola logo"
           onClick={hideMenu}  />
          </NavLink>
        <FaTimes className={styles["menu-icon"]} size={22} color='black' style={{position: "absolute", right: "20px", top: "40px", cursor: "pointer"}} onClick={hideMenu}/>
          <ul>
            <li>
              <NavLink className={activeLink} to="/" onClick={hideMenu}>Home</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/shop" onClick={hideMenu}>Shop Now</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/about" onClick={hideMenu}>About Us</NavLink>
            </li>
            <li>
              <NavLink className={activeLink} to="/contact" onClick={hideMenu}>Contact</NavLink>
            </li>
            <li>
              <ShowOnLogout>
                <NavLink className={activeLink} to="/login" onClick={hideMenu}>Login</NavLink>
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
