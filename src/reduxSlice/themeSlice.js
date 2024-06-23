import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
    name: 'themeSlice',
    initialState: {
        backgroundColor: 'white',
        color: 'black',
        theme: 'light'
    },
    reducers: {
        toggleTheme: (state, action) => {
            if(action.payload == 'dark'){
                state.backgroundColor = 'black';
                state.color = 'white';
                state.theme = 'dark'
            }else{
                state.backgroundColor = 'white';
                state.color = 'black';
                state.theme = 'light'
            }
        }
    }
})

export const {toggleTheme} = themeSlice.actions;

export const selectTheme = (state) => state.themeSlice;

export default themeSlice.reducer;