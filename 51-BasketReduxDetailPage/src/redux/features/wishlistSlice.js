import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export const getUser = createAsyncThunk("wishlist/getUser", async () => {
  const { data } = await axios.get(baseUrl);
  const existUser = data.find((user) => user.isLogin === true);
  return existUser;
});

export const updateWishlist = createAsyncThunk(
    "wishlist/updateWishlist",
    async (product, { getState }) => {
      const state = getState();
      const user = state.wishlist.user;
      
      let newWishlist;
  
      if (Array.isArray(product) && product.length === 0) {
        newWishlist = [];
      } else {
        const existProduct = user.wishlist.find((item) => item.id === product.id);
  
        if (existProduct) {
          newWishlist = user.wishlist.filter((item) => item.id !== product.id);
        } else {
          newWishlist = [...user.wishlist, product];
        }
      }
  
      await axios.patch(`${baseUrl}/${user.id}`, {
        wishlist: newWishlist,
      });
  
      return newWishlist;
    }
  );

const initialState = {
  user: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });

    builder.addCase(updateWishlist.fulfilled, (state, action) => {
      if (state.user) {
        state.user.wishlist = action.payload;
      }
    });
  },
});

export default wishlistSlice.reducer;