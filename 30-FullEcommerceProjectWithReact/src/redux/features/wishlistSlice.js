import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/users";

export const getUser = createAsyncThunk("wishlist/getUser", async () => {
  try {
    const { data } = await axios.get(baseUrl);
    const existUser = data.find((user) => user.isLogin === true);
    return existUser || null;  // Əgər istifadəçi tapılmadısa null qaytar
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
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
  reducers: {
    adddBasket:(state, action) => {
      const existProduct = state.products.find((product) => product.id === action.payload.id);
      if (!existProduct) {
          state.products.push({ ...action.payload, quantity: 1 });
          } else {
              
              existProduct.quantity += 1;
              }
  },
  },
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

export const { adddBasket } = wishlistSlice.actions;
export default wishlistSlice.reducer;