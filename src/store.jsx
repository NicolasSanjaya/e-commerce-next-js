import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/count";
import cartReducer from './features/cart'
import categoriesReducer from './features/categories'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    categories: categoriesReducer
  },
});
