import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "../reduxSlice/reduxSlice";
import todoSlice from "../reduxSlice/todoSlice";
import apiSlice from "../reduxSlice/apiSlice";
import themeSlice from "../reduxSlice/themeSlice";

export const store = configureStore({
    reducer:{
        reduxSlice: reduxSlice,
        todoSlice:todoSlice,
        apiSlice: apiSlice,
        themeSlice: themeSlice
    }
})