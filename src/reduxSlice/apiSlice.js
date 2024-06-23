import { createSlice } from "@reduxjs/toolkit";
import { convertStr } from "../utils";

export const apiSlice = createSlice({
    name:"apiSlice",
    initialState:{
        isLoading:false,
        apiData:[],
        headers:[],
        filteredItems:[],
        error: null,
    },
    reducers:{
        getApiData:  (state, action) => {
            state.apiData = action.payload;
            state.headers = Object.keys(action.payload[0])
        },
        getfilteredItems: (state, action) => {
            let filterItems = []
            state.apiData.map(item => 
                {
                    Object.keys(item).map(key => {
                        if(typeof(item[key]) == "string"){
                            if(item[key].toLowerCase().includes(action.payload.toLowerCase())) {
                                filterItems.push(item)
                            }
                        }else if(typeof(item[key]) == "object"){
                            const str = convertStr(item[key])
                            if(str.toLowerCase().includes(action.payload.toLowerCase())) {
                                filterItems.push(item)
                            }
                        }
                    })
                }
            )
            state.filteredItems = filterItems;
        }
    }
})

export const {setLoading, getApiData, getfilteredItems} = apiSlice.actions;

export const selectApiSlice = (state) => state.apiSlice;

export default apiSlice.reducer;