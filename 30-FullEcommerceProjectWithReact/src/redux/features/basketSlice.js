import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalPrice: 0,
};

const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: { 
        addBasket:(state, action) => {
            const existProduct = state.products.find((product) => product.id === action.payload.id);
            if (!existProduct) {
                state.products.push({ ...action.payload, quantity: 1 });
                } else {
                    
                    existProduct.quantity += action.payload.quantity || 1; 
                    }
        },

deleteBasket: (state, action) => {
     state.products = state.products.filter((product) => product.id !== action.payload.id);
},


plusBtn: (state, action) => {
    const existProduct = state.products.find((product) => product.id === action.payload.id);
    if(existProduct) {
        existProduct.quantity += 1;
    }
},
minusBtn: (state, action) => {
    const existProduct = state.products.find((product) => product.id === action.payload.id);
    if (existProduct) {
        if (existProduct.quantity > 1) {
            existProduct.quantity -= 1;
        } else {
            state.products = state.products.filter((product) => product.id !== action.payload.id);
        }
    }
},  
deleteAllBaket: (state) => {
    state.products = []
}
    },
})

export const {addBasket, deleteBasket, plusBtn, minusBtn, deleteAllBaket} = basketSlice.actions;
export default basketSlice.reducer;