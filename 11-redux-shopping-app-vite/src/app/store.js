import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../features/shoppingApp/shoppingSllice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
    cart: cartReducer,
  },
});
