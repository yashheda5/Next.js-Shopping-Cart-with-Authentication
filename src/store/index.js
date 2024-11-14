import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slices/cart-slice"; // Make sure the path is correct

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
