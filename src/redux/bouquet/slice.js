import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  flowers: [],
  package: null,
  decoration: null,
  price: 0,
};

const bouquetSlice = createSlice({
  name: "bouquet",
  initialState,
  reducers: {
    addFlower(state, action) {
      const findItem = state.flowers.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.flowers.push({
          ...action.payload,
          count: 1,
        });
      }
      state.price += action.payload.price;
    },
    minusFlower(state, action) {
      const findItem = state.flowers.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count--;
      }
      state.flowers = state.flowers.filter((obj) => obj.count !== 0);
      state.price -= action.payload.price;
    },
    removeFlower(state, action) {
      state.flowers = state.flowers.filter((obj) => obj.id !== action.payload.id);
    },
    setPackage(state, action) {
      state.package = action.payload;
      state.package.count = 1;
      if (action.payload) {
        state.price += action.payload.price;
      }
    },
    setDecoration(state, action) {
      state.decoration = action.payload;
      state.decoration.count = 1;
      if (action.payload) {
        state.price += action.payload.price;
      }
    },
    clearBouquet(state) {
      state.id = 0;
      state.flowers = [];
      state.package = null;
      state.decoration = null;
      state.price = 0;
    },
  },
});

export const { addFlower, minusFlower, removeFlower, setPackage, setDecoration, clearBouquet } =
  bouquetSlice.actions;

export default bouquetSlice.reducer;
