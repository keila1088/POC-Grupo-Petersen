import { createReducer, makeActionCreator } from "../util/redux";

export const types = {
    SET_THEME_ID: "theme/PETERSEN/SET_THEME_ID",
    SET_THEME: "theme/PETERSEN/SET_THEME",
};

export const INITIAL_STATE = {
    themeId: "default",
    theme: {},
};

export default createReducer(INITIAL_STATE, {
    [types.SET_THEME]: (state, { theme }) => ({
        ...state,
        theme,
    }),
    [types.SET_THEME_ID]: (state, { themeId }) => ({
        ...state,
        themeId,
    }),
});

export const actions = {
    setTheme: makeActionCreator(types.SET_THEME, "theme"),
    setThemeId: makeActionCreator(types.SET_THEME_ID, "themeId"),
};

export const selectors = {
    getTheme: (state) => state.dinn.themeSelector.theme,
    getThemeId: (state) => state.dinn.themeSelector.themeId,
};