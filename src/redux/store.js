import { configureStore } from '@reduxjs/toolkit'
import addNumberReducer from './addNumberSlice'
export default configureStore({
  reducer: {
    addNumber: addNumberReducer
  },
})