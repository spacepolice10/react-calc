import { createSlice } from '@reduxjs/toolkit'

export const addMemorySlice = createSlice({
  name: 'addMemory',
  initialState: {
    array: [2, 4]
  },
  reducers: {
    add: (state, action) => {

    }
  },
})
export const memoryState = (state) => state.addMemory.array
export const {  } = addMemorySlice.actions
export default addMemorySlice.reducer