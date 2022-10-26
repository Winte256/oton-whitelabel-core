import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LinearState {
  baseTree: any[];
  innerTree: {
    [key: string]: any
  }
}

const initialState: LinearState = {
  baseTree: [],
  innerTree: {}
}

export const linearSlice = createSlice({
  name: 'linear',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    setBaseTree: (state, action: PayloadAction<any[]>) => {
      if (!state.baseTree.length) {
        state.baseTree = action.payload;
      }
    },
    addInnerTree: (state, action: PayloadAction<{ userId: number | string, list: any[] }>) => {
      state.innerTree[action.payload.userId] = action.payload.list;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBaseTree, addInnerTree } = linearSlice.actions

export default linearSlice.reducer