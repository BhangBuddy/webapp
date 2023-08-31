import React, { useEffect, useState } from "react";
import styles from "./Personal.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import {setUser} from "../../../redux/slice/profileSlice"

const PersonalInfo = () => {
  const use = useSelector((state) => state.profile);
  const user = use.user;
  console.log(user)
  useEffect(() => {
    if (user) {
      setName(user.name);
      setUsername(user.username);
      setPhone(user.Phone);
    }
  }, [user]);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [button, setButton] = useState(true);
  const dispatch = useDispatch()
  const onToggle = async (e) => {
    setButton((e) => !e);
   if(!button){
    await profileUpdate(e);
   } 
  };
  const profileUpdate = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:8000/updateProfile/${user?._id}`,
        {
          name,
          username,
          phone
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res)
      if (res.data.status) {
        toast.success("profile upload successfully");
        dispatch(setUser(res.data))
        
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("error in upload");
      console.log(error);
    }
  };
 
  // console.log(user)
  // setName(user.name)
  // setUsername(user.username)
  // setPhone(user.phone)
  return (
    <>
      <div className={styles["personal-container"]}>
        <h2>Personal Information</h2>
        <button
  onClick={onToggle}
  style={{
    height: 30,
    width: 100,
    borderRadius: 10,
    background: "#218c74",
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  }}
>
  {user && button ? "edit" : "update"}
</button>

        <div className={styles["personal-boxes"]}>
          <div className={styles["person-box-1"]}>
            <h4>Name</h4>
            {button ? (
              <p>{user?.name}</p>
            ) : (
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                height={100}
                value={name}
                style={{
                  borderRadius: 10,
                  height: 30,
                  fontSize: 20,
                }}
              />
            )}
          </div>
          <div className={styles["person-box-1"]}>
            <h4>Email</h4>
            <p>{user?.email}</p>
          </div>
          <div className={styles["person-box-1"]}>
            <h4>Phone</h4>
            {button ? (
              <p>{user?.Phone}</p>
            ) : (
              <input
                type="text"
                onChange={(e) => setPhone(e.target.value)}
                height={100}
                value={phone}
                style={{
                  borderRadius: 10,
                  height: 30,
                  fontSize: 20,
                }}
              />
            )}
          </div>
          <div className={styles["person-box-1"]}>
            <h4>Username</h4>
            {button ? (
              <p>{user?.username}</p>
            ) : (
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                height={100}
                value={username}
                style={{
                  borderRadius: 10,
                  height: 30,
                  fontSize: 20,
                }}
              />
            )}
          </div>
          <div className={styles["person-box-1"]}>
            <h4>Role</h4>
            <p>not assigned</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
