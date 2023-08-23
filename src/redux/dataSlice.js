import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
}

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        // incrementByAmount: (state, action) => {
        //   state.value += action.payload
        // },
    },
})

export const { } = dataSlice.actions

export default dataSlice.reducer