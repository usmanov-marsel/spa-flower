import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  bouquets: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addBouquet(state, action) {
      const findItem = state.bouquets.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.bouquets.push({
          ...action.payload,
          count: 1,
          id: state.bouquets.length + 1,
        });
      }
      state.totalPrice = state.bouquets.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    minusBouquet(state, action) {
      const findItem = state.bouquets.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = state.bouquets.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    removeBouquet(state, action) {
      state.bouquets = state.bouquets.filter((obj) => obj.id !== action.payload.id);
      state.totalPrice = state.bouquets.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateBouquet(state, action) {
      state.bouquets = state.bouquets.filter((obj) => obj.id !== action.payload.id);
      state.bouquets.push(action.payload);
      state.totalPrice = state.bouquets.reduce((sum, obj) => obj.price * obj.count + sum, 0);
      localStorage.setItem("cart", JSON.stringify(state));
    },
    clearCart(state) {
      state.bouquets = [];
      state.totalPrice = 0;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addBouquet, minusBouquet, removeBouquet, updateBouquet, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
