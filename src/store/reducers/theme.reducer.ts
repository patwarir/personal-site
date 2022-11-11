import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@root/store/global.store";

export type ThemeState = {
  theme: "light" | "dark",
};

const initialState: ThemeState = {
  theme: "dark",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state: ThemeState) => {
      if (state.theme === "light") {
        state.theme = "dark";
      } else if (state.theme === "dark") {
        state.theme = "light";
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme.theme;
export default themeSlice.reducer;
