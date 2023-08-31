import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
const activeLink = ({ isActive }) => (isActive ? `${styles.active}` : "");

const Navbar = () => {
  const [file, setFile] = useState();
  const [fileDataURL, setFileDataURL] = useState(null);
  const [status, setStatus] = useState(false);
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
          setStatus(true);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  const dat = useSelector((state) => state.profile);
  const data = dat.user;
  console.log(data._id);
  const profilePic = async () => {
    /* const data={
      avatar:file
    }*/
    setFile(false);
    // e.preventDefault();
    const token = localStorage.getItem("token");
    const formdata = new FormData();
    formdata.append("avatar", file);
    console.log(formdata);
    try {
      const res = await axios.put(
        `http://localhost:8000/update/${data._id}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.status === true) {
        toast.success("profile upload successfully");
        setStatus(false);
      } else {
        if (res.data.status === false) {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      toast.error("error in upload");
      console.log(error);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          name="file"
          id="img"
          style={{ display: "none" }}
        />
        <div className={styles.user}>
          {fileDataURL ? (
            <img
              height={150}
              width={150}
              style={{ borderRadius: 75 }}
              src={fileDataURL}
              accept="image/*"
            />
          ) : data.avatar ? (
            data.avatar.length > 150 ? (
              <img
                height={150}
                width={150}
                style={{ borderRadius: 75 }}
                src={`data:image/png;base64,${data.avatar}`}
              />
            ) : (
              <img
                height={150}
                width={150}
                style={{ borderRadius: 75 }}
                src={data.avatar}
              />
            )
          ) : (
            <FaUserCircle size={120} color="#fff" />
          )}
          <label
            style={{
              marginTop: 60,
              cursor: "grab",
              marginTop: -40,
              marginRight: -50,
            }}
            for="img"
          >
            <span className="fa fa-camera fa-2x " style={{ color: "black" }}>
              {" "}
            </span>
          </label>
          {status ? (
            <>
              {" "}
              <button
                onClick={() => profilePic() && setStatus(false)}
                style={{ backgroundColor: "green" }}
              >
                Upload
              </button>{" "}
              <button
                className="btn btn-dark"
                onClick={() => {
                  setStatus(false);
                }}
              >
                Cancel
              </button>{" "}
            </>
          ) : null}
          {data.username}
          Bhangola
        </div>
        <nav className={styles.profile}>
          <ul>
            <li>
              <NavLink to="/profile/personalinfo" className={activeLink}>
                Personal Information
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/billing" className={activeLink}>
                Billing & Payments
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile/orderhistory" className={activeLink}>
                Order History
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
