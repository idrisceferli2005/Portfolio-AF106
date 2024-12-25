import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

 export  const getProducts = createAsyncThunk("products", async () => {
    const {data} = await axios("https://dummyjson.com/products");
    return data.products;
  }
  
  );
  
  const initialState = {
    products: [],
  };


  export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload;

        })

    }
  })
  export default productSlice.reducer;