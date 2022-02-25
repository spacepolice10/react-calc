import { createSlice } from '@reduxjs/toolkit'

export const addNumberSlice = createSlice({
    name: 'addNumber',
    initialState: {
      value: '0',
    },
    reducers: {
      add: (state, action) => {
        state.value += action.payload
      },
    },
  })
export const inputState = (state) => state.addNumber.value
export const { add } = addNumberSlice.actions
export default addNumberSlice.reducer