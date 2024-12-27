import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const deteilSlice = createSlice({
  name: 'deteil',
  initialState,
  reducers: {
    addProduct(state, action) {
      const existProduct = state.products.find((product) => product.id === action.payload.id);
      if (!existProduct) {
        state.products.push({ ...action.payload, quantity: 1 });
      } else {
        existProduct.quantity += 1;
      }
    },
    pilusBtn(state, action) {
      const existProduct = state.products.find((product) => product.id === action.payload.id);
      if (existProduct) {
        existProduct.quantity += 1;
      }
    },
    minsBtn(state, action) {
      const existProduct = state.products.find((product) => product.id === action.payload.id);
      if (existProduct && existProduct.quantity > 1) {
        existProduct.quantity -= 1;
      }
    },
  },
});

export const { addProduct, pilusBtn, minsBtn } = deteilSlice.actions;
export default deteilSlice.reducer;
