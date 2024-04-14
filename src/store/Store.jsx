import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice
  },
});

export default Store;
 