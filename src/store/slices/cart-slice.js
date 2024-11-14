import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      console.log(state, action);
      // Push the entire product item to the cart
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      // Filter out the item with the matching id
      console.log("removing")
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
