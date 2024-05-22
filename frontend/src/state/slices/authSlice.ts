import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    apiKey: localStorage.getItem('apiKey') || null,
  },
  reducers: {
    setApiKey: (state, action) => {
      state.apiKey = action.payload;
      localStorage.setItem('apiKey', action.payload);
    },
    clearApiKey: (state) => {
      state.apiKey = null;
      localStorage.removeItem('apiKey');
    },
  },
});

export const { setApiKey, clearApiKey } = authSlice.actions;

export default authSlice.reducer;
