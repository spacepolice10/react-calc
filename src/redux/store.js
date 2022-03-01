import { configureStore } from '@reduxjs/toolkit'
import addNumberReducer from './addNumberSlice'
import addMemorySlice from './addMemorySlice'
export default configureStore({
  reducer: {
    addNumber: addNumberReducer,
    addMemory: addMemorySlice
  },
})