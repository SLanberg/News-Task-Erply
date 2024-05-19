// apiSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    apiKey: null,
  },
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload;
    },
  },
});

export const { setApiKey } = apiSlice.actions;

export const selectApiKey = (state: RootState) => state.api.apiKey;

export default apiSlice.reducer;
