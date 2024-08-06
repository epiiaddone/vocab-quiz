import { createSlice } from "@reduxjs/toolkit"
import { MENU_ORDER } from "../../utils/constants";

const initialState = {
    order: MENU_ORDER.NUMERICAL
}

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        handleOrderClick: (state, { payload }) => {
            if (payload === MENU_ORDER.NUMERICAL) state.order = MENU_ORDER.NUMERICAL
            else if (payload === MENU_ORDER.LOWEST) state.order = MENU_ORDER.LOWEST
            else if (payload === MENU_ORDER.OLDEST) state.order = MENU_ORDER.OLDEST
        }
    }
})

export const {
    handleOrderClick
} = menuSlice.actions;

export default menuSlice.reducer;