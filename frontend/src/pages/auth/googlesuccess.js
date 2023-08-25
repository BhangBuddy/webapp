import React, { useEffect } from 'react'
import Loader from '../../components/loader/Loader'
import { useParams,useLocation } from 'react-router-dom'
const Googlesuccess = () => {
    const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  const username = searchParams.get("username");
    useEffect(()=>{
     setTimeout(()=>{

     },3000)
       dat()
    })
    const dat=async()=>{
        
        await localStorage.setItem("token",token);
        await localStorage.setItem("username",username)
         window.location.href="/"
        }
  return <>
  {<Loader />}
  
  </>
}

export default Googlesuccess