import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {toast} from "react-toastify"

const Confirm = () => {
    const navigate = useNavigate()
    const [pass,setPass] = useState("");
    const [pass1,setPass1] = useState("");
    const data=useParams();
    const reset = async (e) => {
        e.preventDefault();

        try {
          const res = await axios.post(`http://localhost:8000/reset_password/${data.id}/${data.token}`, {
            password: pass,
            confirmPassword: pass1,
          });
          console.log(res)
          if(res.data.status===true){
            toast.success("password changed successfully");
            navigate("/login")
          }
          else if(res.data.status===false){
            toast.error(res.data.message);
            setPass("")
            setPass1("")
          }else{
            toast.error("something went wrong try again");
            setPass("")
            setPass1("")
          }
        }catch (error) {
            if(error.response.status==401){
                toast.error("Unauthorized or Request timeout try again")
                navigate("/reset")
            }
          console.error("Error resetting password:", error);
          // Handle error here, e.g., show an error message to the user
        }
      };

  return <>
  <h2 class='text-primary text-center'>Reset Password</h2>
    <form className='form-control' onSubmit={reset}>
        <input onChange={(e)=>setPass(e.target.value)} value={pass} type="password" placeholder='Enter password' required/>
        <input onChange={(e)=>setPass1(e.target.value)} value={pass1} type="password" placeholder='Confirm password' required/>
        <button className="btn btn-outline-dark" type='submit'>Update Password</button>
    </form>
  </>
}

export default Confirm