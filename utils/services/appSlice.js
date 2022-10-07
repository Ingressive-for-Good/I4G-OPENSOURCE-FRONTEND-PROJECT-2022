import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
  isEmpty: true
};
const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload.price;
    },
    setIsEmpty: (state) => {
      state.isEmpty = false
    }
  },
});
export const { setPrice, setIsEmpty } = appSlice.actions;
export default appSlice;
