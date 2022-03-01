import { createSlice } from '@reduxjs/toolkit'

export const addMemorySlice = createSlice({
  name: 'addMemory',
  initialState: {
    dragged: null,
    dropped: false,
    array: []
  },
  reducers: {
    drop: (state, action) => {
      if (state.dropped) {
        if (state.array.length >= 5) {
          state.array.shift()
        } 
        state.array.push(state.dragged.data)
        state.dropped = false
      } else {
        return
      }
    },
    fixDrag: (state, action) => {
      state.dragged = action.payload
    },
    fixDrop: (state, action) => {
      state.dropped = action.payload
    },
    looseDrop: (state) => {
      state.dropped = false
    },
    pop: (state) => {
      console.log(state.dragged.data)
      const index = state.array.indexOf(state.dragged.data)
      state.array.splice(index, 1)
    }
  },
})
export const memoryState = (state) => state.addMemory.array
export const draggedState = (state) => state.addMemory.dragged
export const droppedState = (state) => state.addMemory.dropped
export const { drop, pop, fixDrag, fixDrop, looseDrop } = addMemorySlice.actions
export default addMemorySlice.reducer