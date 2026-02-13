import react, { useState } from "react";
import { addUser } from "./Slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Create = () => {
    const users=useSelector((state)=>state.users);
    const dispatch=useDispatch();

    const [name,setName]=useState();
    const [email,setEmail]=useState();

    const navigate=useNavigate();

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        if(users.length>0)
            dispatch(addUser({id: users[users.length-1].id+1,name,email}))
        else
            dispatch(addUser({id:1,name,email}))
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
                <button className='btn btn-info'>Submit</button>
            </form>
        </div>
      </div>
    )
}

export default Create
