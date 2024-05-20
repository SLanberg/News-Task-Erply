// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';


// Function to get initial state from local storage
const getInitialStateFromLocalStorage = () => {
  const storedApiKey = localStorage.getItem('apiKey');
  return {
    apiKey: storedApiKey ? storedApiKey : null,
    query: '', 
  };
};

export const apiSlice = createSlice({
  name: 'api',
  initialState: getInitialStateFromLocalStorage(), // Initialize state from local storage
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload;
      // Update local storage when API key changes
      localStorage.setItem('apiKey', action.payload);
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const { setApiKey, setQuery } = apiSlice.actions;

export const selectApiKey = (state: RootState) => state.api.apiKey;
export const selectQuery = (state: RootState) => state.api.query;

export default apiSlice.reducer;