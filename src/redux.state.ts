import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: { data: any } = {
    data: {}
}

export const globalData = createSlice({
    name: 'globalData',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<number>) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { update } = globalData.actions

export default globalData.reducer