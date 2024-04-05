import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: []
    },
    reducers: {
        populate: (state, products) => {
            state.value = []
        }
    }
});

export const productsReducer = productsSlice.reducer