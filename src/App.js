import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home, Shop, About, Contact, Cart} from "./pages";
import {Header, Footer} from "./components";

function App() {
  return (
   <>
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/shop' element={<Shop/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/cart' element={<Cart/>} />
    </Routes>

    <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
