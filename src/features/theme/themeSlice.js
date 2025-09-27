import { createSlice } from "@reduxjs/toolkit";

// Load initial theme from localStorage or default to 'light'
const initialTheme = localStorage.getItem("theme") || "light";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", state.theme);
    }
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;