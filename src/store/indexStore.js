import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
// A friendly abstraction over the standard Redux createStore function that adds good defaults to the store setup for a better development experience.
const store = configureStore({
  // keep the name as reducer only
  reducer: {
    daliya: cartReducer,
    saaman: productSlice,
  },
});

export default store;
