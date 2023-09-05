import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);

      if (itemInCart) {
        itemInCart.cartQuantity++;
      } else {
        state.cart.push({ ...action.payload, cartQuantity: 1 });
      }
    },
    minus: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      if (itemInCart.cartQuantity > 1) {
        itemInCart.cartQuantity--;
      }
    },
    plus: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload);
      itemInCart.cartQuantity++;
    },
    remove: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem
    }
  },
});

export const { increment, plus, minus, remove } = cart.actions;
export default cart.reducer;
