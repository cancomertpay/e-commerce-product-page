import { configureStore } from "@reduxjs/toolkit";
// slices
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
