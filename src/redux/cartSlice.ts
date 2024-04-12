import { createSlice } from "@reduxjs/toolkit";
import { CartProduct } from "../models/types";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    value: JSON.parse(localStorage.getItem("cart") || "[]") as CartProduct[],
  },
  reducers: {
    addToCart: (state, { payload }: { payload: string }) => {
      const element = state.value.find((element) => element.id === payload);
      !element && state.value.push({ id: payload, quantity: 1 });
      element && element.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeOneFromCart: (state, { payload }: { payload: string }) => {
      const element = state.value.find((element) => element.id === payload);
      element && element.quantity > 1
        ? element.quantity--
        : (state.value = state.value.filter((el) => el.id !== payload));
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeFromCart: (state, { payload }: { payload: string }) => {
      const element = state.value.find((element) => element.id === payload);
      if (element) {
        state.value = state.value.filter((el) => el.id !== payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});

export const { addToCart, removeFromCart, removeOneFromCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
