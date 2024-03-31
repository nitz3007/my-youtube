import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: false,
        selectedVideoCategory: {
            name: 'All',
            id: 'all'
        }
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
        setSelectedVideoCategory: (state, action) => {
            state.selectedVideoCategory = action.payload;
        }
    }
});

export const { toggleMenu, closeMenu, setSelectedVideoCategory } = appSlice.actions;
export default appSlice.reducer;