import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: "",
};

export const categories = createSlice({
  name: "category",
  initialState,
  reducers: {
    all: (state) => {
      state.categories = "";
    },
    electronics: (state) => {
      state.categories = "electronics";
    },
    jewelery: (state) => {
      state.categories = "jewelery";
    },
    menclothing: (state) => {
      state.categories = "menclothing";
    },
    womenclothing: (state) => {
      state.categories = "womenclothing";
    },
  },
});

export const { all, electronics, jewelery, menclothing, womenclothing } = categories.actions;
export default categories.reducer;
