import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice";
import ShopSlice from "../features/ShopSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice,
    shop: ShopSlice
  },
});

export default Store;
 