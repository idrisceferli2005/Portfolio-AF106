import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

const BASE_URL = "http://localhost:5000/api/products"

const initialState = {
    products: [],
}   

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get(BASE_URL)
    console.log(response.data)
    return response?.data.products
})

export const addProducts = createAsyncThunk("products/addProducts", async (products) => {
    const response = await axios.post(BASE_URL, products)
    return response?.data.products

})

export const deleteProducts = createAsyncThunk("products/deleteProducts", async(id) => {
    await axios.delete( ` ${BASE_URL}/ ${id}`)
})

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

},
  extraReducers(builder) {
        builder
            .addCase(addProducts.fulfilled, (state, action) => {
                state.products.push(action.payload)
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products =action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
         .addCase(deleteProducts.fulfilled, (state, action) => {
            state.products = state.products.filter((item) => item._id !== action.payload)
         })
    }
})

export const {extraReducers} = productSlice.actions
export default productSlice;