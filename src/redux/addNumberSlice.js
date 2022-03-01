import { createSlice } from '@reduxjs/toolkit'

export const addNumberSlice = createSlice({
  name: 'addNumber',
  initialState: {
    value: '0',
    result: ''
  },
  reducers: {
    add: (state, action) => {
      if (/[A-z]/g.test(action.payload)) return
      if (state.value == '0') { state.value = action.payload; return; }
      state.value += action.payload
    },
    remove: (state, action) => {
      if (action.payload == 'Backspace' && state.value.length == 1) { 
        state.value = '0'; return 
      }
      state.value = state.value.slice(0, state.value.length - 1)
    },
    count: (state) => {
      try {
        state.result = eval(state.value)
        state.value = '0'
      } catch (e) {
        alert('Incorrect expression. Please, consider changing it')
      }
    },
    clear: (state) => {
      state.value = '0'
      state.result = ''
    }
  },
})
export const resultState = (state) => state.addNumber.result
export const inputState = (state) => state.addNumber.value
export const { add, remove, count, clear } = addNumberSlice.actions
export default addNumberSlice.reducer