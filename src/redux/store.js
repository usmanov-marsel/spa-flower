import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart/slice";
import bouquet from "./bouquet/slice";

export const store = configureStore({
  reducer: {
    cart,
    bouquet,
  },
});
