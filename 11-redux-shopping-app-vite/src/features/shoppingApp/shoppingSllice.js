import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./shoppingAPI";

const initialState = {
  products: [],
  loading: false,
};

export const fetchProductsAsync = createAsyncThunk(
  "shopping/fetchProducts",
  async () => {
    const response = await fetchProducts();
    return response.json();
  }
);

export const shoppingSlice = createSlice({
  name: "shopping",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      });
  },
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default shoppingSlice.reducer;
