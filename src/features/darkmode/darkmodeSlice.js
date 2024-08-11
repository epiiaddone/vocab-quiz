import { createSlice } from "@reduxjs/toolkit"

const getInitialDarkMode = () => {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.toggle('dark', true);
        return true;
    } else if (localStorage.getItem('darkMode') === 'false') return false;

    const prefersDarkMode = window.matchMedia(
        '(prefers-color-scheme:dark)'
    ).matches;
    if (prefersDarkMode) {
        document.body.classList.toggle('dark', true);
        return true;
    } else return false;
};

const initialState = {
    isDarkMode: getInitialDarkMode()
}

const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
            localStorage.setItem('darkMode', state.isDarkMode)
            document.body.classList.toggle('dark', state.isDarkMode);
        }
    }
})

export const {
    toggleDarkMode
} = darkmodeSlice.actions;

export default darkmodeSlice.reducer;