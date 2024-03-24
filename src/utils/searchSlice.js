import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    
    //it will be something like(a Map data structure):
    // {
    //     'ip': ['iphone', 'iphone 13', 'ipl'],
    //     'ipho': ['iphone', 'iphone pro max', 'iphone 15']
    // }
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload);
        }
    }
})

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;