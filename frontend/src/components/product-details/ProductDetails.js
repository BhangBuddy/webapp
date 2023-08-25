import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {addItemToCart} from "../../redux/slice/cartSlice";
import { useDispatch } from 'react-redux';


const ProductDetails = (props) => {
  var dispatch= useDispatch();
  const [pro,setpro]=useState();
  // console.log(pro)
const product=props.product;
var id= useParams();
// var idd=id.id
var nm = product.filter(nm=>nm.id==id.id);
var addToCart=(item)=>{
  dispatch(addItemToCart(item.id))
}

  return <>
  
    <div className="container">
    <div className="row">
      {nm.map((item, index) =>{ return <>
        <div className="col-md-4 mb-4" key={index}>
          <div className="card">
            <img src={"/"+item.image} height={250} className="card-img-top"  />
            {/* {console.log(item.image)} */}
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p className="card-text">{item.price}</p>
              <button className="btn btn-sm btn-outline-primary" onClick={()=> addToCart(item) }>Add to Cart</button>
              {console.log(item.id)}
            </div>
          </div>
        </div>
        </>})}
  </div>
  </div>
  </>
}

export default ProductDetails