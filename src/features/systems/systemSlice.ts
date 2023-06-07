/* eslint-disable no-param-reassign */
import { THEME_MODE, themeMode } from "@/utils/constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SystemState {
    themeMode: themeMode;
}

const initialState: SystemState = {
    themeMode: THEME_MODE.Dark,
};

export const systemSlice = createSlice({
    name: "system",
    initialState,
    reducers: {
        setCurrentMode: (state, action: PayloadAction<themeMode>) => {
            state.themeMode = action.payload;
        },
    },
});

export const { setCurrentMode } = systemSlice.actions;

export default systemSlice.reducer;
