import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.find((item) => item.id === action.payload.id);

      if (itemExists) 
      {
        itemExists.qnty += 1;
      } 
      else 
      {
        state.push({ ...action.payload, qnty: 1 });
      }
    },

    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.qnty += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.qnty > 1) {
        item.qnty -= 1;
      }
    },
    clearCart: (state) => {
      return []; // Resets the state to an empty array
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
