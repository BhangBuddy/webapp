import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Home, Shop, About, Contact, Cart, Login, Register, Reset, Profile } from './pages';
import { Header, Footer } from './components';
import { ToastContainer } from 'react-toastify';
import ProductDetails from './components/product-details/ProductDetails';
import Cardapi from './components/cartcard/Cardapi';
import Confirm from './pages/auth/confirmReset';
import OTPverify from './pages/auth/OTPverify';
 
import Googlesuccess from './pages/auth/googlesuccess';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check local storage for authentication token
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  });

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
          {/* Public routes */}
          {isAuthenticated ? <>
            <Route path="/login" element={<Navigate to="/" replace />} />
          </>:<>
          <Route path="/login" element={<Login />} />
          </>}
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path='/verify' element ={<OTPverify/>}/>
          <Route path='/auth/success/' element={<Googlesuccess/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/reset_password/:id/:token" element={<Confirm />} />
          <Route path='/profile/*' element={<Profile/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;