import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: 'light',
    reducers: {
        toggle: (state: string) => {}        
    }
})