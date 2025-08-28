// ./reducers/productSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadproducts : (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { loadproducts } = productSlice.actions;
export default productSlice.reducer; // ✅ Make sure you're exporting the reducer