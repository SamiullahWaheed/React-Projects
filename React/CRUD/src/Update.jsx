import React, { useState } from 'react'
import { updateUser } from "./Slices/userSlice";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const location = useLocation();
     const state = location.state;

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        console.log(state.id,name,email);
        dispatch(updateUser({id:state.id,name:name,email:email}))
        navigate("/");
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className="w-50 border bg-secondary text-white p-5">
        <h3 className='text-2xl'> Add New User</h3><br />
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name='name' className='form-control'placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="name">Email:</label>
                <input type="email" name='email' className='form-control' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
            </div><br />
            <button className='btn btn-info'>Update</button>
        </form>
    </div>
  </div>
  )
}

export default Update
