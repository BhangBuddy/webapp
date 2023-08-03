import React from 'react'
import Testimonials from '../../components/testimonials/Testimonials'
import Slider from "../../components/slider/Slider";
import Cart from '../../components/cartcard/Cart';

const Home = () => {
  return (
   <>
   <Slider/>
   <Cart />
   <Testimonials/>
   </>
  )
}

export default Home