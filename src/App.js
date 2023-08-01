import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {Home, Shop, About, Contact, Cart, Login, Register, Reset} from "./pages";
import {Header, Footer} from "./components";
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
