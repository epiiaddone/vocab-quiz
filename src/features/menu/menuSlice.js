import { createSlice } from "@reduxjs/toolkit"
import { LANGUAGE, MENU_ORDER } from "../../utils/constants";

const initialState = {
    order: MENU_ORDER.NUMERICAL,
    language: LANGUAGE.JAPANESE
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        handleOrderClick: (state, { payload }) => {
            if (payload === MENU_ORDER.NUMERICAL) state.order = MENU_ORDER.NUMERICAL
            else if (payload === MENU_ORDER.LOWEST) state.order = MENU_ORDER.LOWEST
            else if (payload === MENU_ORDER.OLDEST) state.order = MENU_ORDER.OLDEST
        },
        handleLanguageClick: (state, { payload }) => {
            if (payload === LANGUAGE.JAPANESE) state.language = LANGUAGE.JAPANESE
            else if (payload === LANGUAGE.CHINESE) state.language = LANGUAGE.CHINESE
        }
    }
})

export const {
    handleOrderClick,
    handleLanguageClick
} = menuSlice.actions;

export default menuSlice.reducer;