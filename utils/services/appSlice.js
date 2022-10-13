import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  price: 0,
  isEmpty: false,
  uploadedProducts:[
    {id: 0, productName: 'Workspace equipment', description: 'product category', productImg: '../../src/assets/img1.png', price: '#25,000', availability: false, openEdit: false},
    {id:1, productName: 'product name', description: 'product category', productImg: '../../src/assets/img2.png', price: '#25,000', availability: true, openEdit: false},
    {id:2, productName: 'product name', description: 'product category', productImg: '../../src/assets/img3.png', price: '#25,000', availability: false, openEdit: false},
    {id:3, productName: 'product name', description: 'product category', productImg: '../../src/assets/img4.png', price: '#25,000', availability: true, openEdit: false},
  ]
};
const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPrice: (state, action) => {
      state.price = action.payload.price;
      return state.price;
    },
    setIsEmpty: (state) => {
      state.isEmpty = false
    },
    setAvailability: (state, action) => {
      const ItemId = action.payload
      state.uploadedProducts.map(item => {
        if(item.id === ItemId){
          item.availability = true
        }
      })
    },
    setOpenEdit: (state, action) => {
      const ItemId = action.payload
      state.uploadedProducts.map(item => {
        if(item.id === ItemId){
          item.openEdit = !item.openEdit
        }
      })
    },
  },
});
export const { setPrice, setIsEmpty,setAvailability, setOpenEdit} = appSlice.actions;

export default appSlice.reducer;
