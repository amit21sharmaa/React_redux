import { createSlice } from "@reduxjs/toolkit";

export const reduxSlice = createSlice({
    name: "reduxSlice",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state) =>{ state.value += 1},
        decrement:(state) =>{ state.value -= 1}
    }
})

export const {increment, decrement} = reduxSlice.actions;

export default reduxSlice.reducer;

export const selectReduxSlice = (state) => state.reduxSlice.value;