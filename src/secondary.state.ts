import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SecondaryState {
    value: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const initialState: { data: any } = {
    data: {}
}

export const secondaryState = createSlice({
    name: 'secondaryState',
    initialState,
    reducers: {
        update: (state, action: PayloadAction<number>) => {
            state.data = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { update } = secondaryState.actions

export default secondaryState.reducer