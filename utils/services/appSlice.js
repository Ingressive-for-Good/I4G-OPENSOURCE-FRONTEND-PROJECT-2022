import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: 0,
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload.price;
      return state.price;
    },
  },
});
export const { setPrice } = appSlice.actions;
export default appSlice;
