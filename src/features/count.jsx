import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterCart = createSlice({
  name: "count",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = counterCart.actions;
export default counterCart.reducer;
