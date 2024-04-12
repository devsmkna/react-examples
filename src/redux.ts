import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./redux/cartSlice";
import { themeReducer } from "./redux/themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export type State = ReturnType<typeof store.getState>;
