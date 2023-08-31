import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styles from './Profile.module.css';
import { Billing, Navbar, OrderHistory, PersonalInfo } from '../../components';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setUser } from '../../redux/slice/profileSlice';
import { useDispatch } from 'react-redux';
import Loader from '../../components/loader/Loader';

const Profile = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  useEffect(() => {
    const profile = async () => {
      const token = await localStorage.getItem('token');
      try {
        const res = await axios.get('http://localhost:8000/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setData(res.data);
        setUser(res.data)
        dispatch(setUser(res.data))
        setLoading(false);
      } catch (error) {
        console.log(error)
        toast.error('Error in fetching data');
        setLoading(false);
        // console.log(error);
      }
    };
    profile();
  }, []);

  if (loading) {
    return <div><Loader/></div>;
  }

  if (!data) {
    return <div>Error fetching data</div>;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.navbar}>
        <Navbar  />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="personalinfo" element={<PersonalInfo />} />
          <Route path="billing" element={<Billing />} />
          <Route path="orderhistory" element={<OrderHistory />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;
