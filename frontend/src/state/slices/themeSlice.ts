import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define initial state for theme
interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: 'default',
};

// Define your theme slice
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
  },
});

// Export actions
export const { setTheme } = themeSlice.actions;

// Export reducer
export default themeSlice.reducer;
