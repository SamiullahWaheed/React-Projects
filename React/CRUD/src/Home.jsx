import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeUser } from './Slices/userSlice';


const Home = () => {
    const dispatch=useDispatch();
    const users=useSelector((state)=>state.users);
    console.log(users);
  return (
    <div className='container'>
        <h1 className='text-3xl'>CRUD App Practice</h1>
        <Link to={"/Create"}  className="my-3 btn-success btn">Create +</Link>        
        <table className='table'>
             <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
             </thead>
             <tbody>
                {
                  users.map((users,key)=>(
                    <tr key={key}>
                      <td>{users.id}</td>
                      <td>{users.name}</td>
                      <td>{users.email}</td>
                      <td>
                        <Link to="/Update" state={{ id: users.id }} className='btn btn-primary btn-sm'>Edit</Link>
                        <button className='btn btn-danger ms-2 btn-sm' onClick={()=>{dispatch(removeUser(users.id))}}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
             </tbody>
        </table>
      
    </div>
  )
}

export default Home
