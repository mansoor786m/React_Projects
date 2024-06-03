import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartProducts.push(action.payload);
    },
  },
  extraReducers: (builder) => {},
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
