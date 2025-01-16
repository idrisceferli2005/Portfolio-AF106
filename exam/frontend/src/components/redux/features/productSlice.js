
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/products/"

const initialState = {
    products: [],
    status: "idle",
    error: null
}

export const fetchProducts = createAsyncThunk("posts/fetchProducts", async () => {
    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response?.data.products
})



const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
},
  extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

export default productSlice;