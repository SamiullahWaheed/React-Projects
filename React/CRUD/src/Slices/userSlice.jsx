import { createSlice } from '@reduxjs/toolkit'
import { userList } from '../userList';

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        removeUser:(state,action)=>{
            return state.filter((user)=>{return user.id !== action.payload});
        },
        updateUser:(state,action)=>{
            state.map((user)=>{
                if(user.id==action.payload.id){
                    user.name=action.payload.name;
                    user.email=action.payload.email;
                }
            })
        }
    }
})
export const {addUser,removeUser,updateUser} = userSlice.actions;
export default userSlice.reducer;
