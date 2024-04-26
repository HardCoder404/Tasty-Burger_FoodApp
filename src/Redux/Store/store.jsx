import { configureStore } from '@reduxjs/toolkit'
import  cartSlice  from '../Slice/addtocart'
export const store = configureStore({
  reducer: {
    counter: cartSlice
  },
})