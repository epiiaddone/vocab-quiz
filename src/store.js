import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./features/game/gameSlice";
import menuSlice from "./features/menu/menuSlice";

export const store = configureStore({
    reducer: {
        game: gameSlice,
        menu: menuSlice
    }
});