import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:3000/products";
const usersBaseUrl = "http://localhost/3000/users";


export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const { data } = await axios(usersBaseUrl);
  return data;
});

export const addUser = createAsyncThunk("users/addUser", async (user) => {
  const { data } = await axios.post(usersBaseUrl, user);
  return data;
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`${usersBaseUrl}/${id}`);
  return id;
});


export const getProducts = createAsyncThunk("products/getproduct", async () => {
  const { data } = await axios(baseUrl);
  return data;
});

export const addProduct = createAsyncThunk(
  "products/addproduct",
  async (product) => {
    const { data } = await axios.post(baseUrl, product);
    return data;
  }
);

export const deleteProduct = createAsyncThunk(
  "products/deleteproduct",
  async (id) => {
    await axios.delete(`${baseUrl}/${id}`);
    return id;
  }
);

export const updateProduct = createAsyncThunk(
  "products/updateproduct",
  async (product) => {
    const { data } = await axios.put(`${baseUrl}/${product.id}`, product);
    return data;
  }
);

const initialState = {
  products: [],
  allProducts: [],
  users: [], 
  allUsers: [],
  
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    searchProduct: (state, action) => {
      state.products = state.allProducts.filter((product) =>
        product.title
          .toLowerCase()
          .includes(action.payload.trim().toLowerCase())
      );
    },
    sortAzProduct: (state) => {
      state.products = state.products.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    },
    sortZaProduct: (state) => {
      state.products = state.products.sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    },
    sortLowProduct: (state) => {
      state.products = state.products.sort((a, b) => a.price - b.price);
    },
    sortHighProduct: (state) => {
      state.products = state.products.sort((a, b) => b.price - a.price);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.allProducts = action.payload;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return action.payload;
        } else {
          return product;
        }
      });   
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.allUsers = action.payload;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.users.push(action.payload);
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    });
  },
  },
);

export default productSlice.reducer;
export const {
  extraReducers,
  searchProduct,
  sortAzProduct,
  sortZaProduct,
  sortLowProduct,
  sortHighProduct,
} = productSlice.actions;