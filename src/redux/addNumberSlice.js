import { createSlice } from '@reduxjs/toolkit'

export const addNumberSlice = createSlice({
    name: 'addNumber',
    initialState: {
      value: '0',
    },
    reducers: {
      add: (state, action) => {
        if (state.value == '0') {state.value = action.payload; return;}
        state.value += action.payload
      },
      remove: (state, action) => {
        if (action.payload == 'Backspace' && state.value.length == 1) {state.value = '0'; return}
        state.value = state.value.slice(0, state.value.length - 1)
      }
    },
  })
export const inputState = (state) => state.addNumber.value
export const { add, remove } = addNumberSlice.actions
export default addNumberSlice.reducer