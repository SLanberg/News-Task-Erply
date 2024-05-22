import { configureStore } from '@reduxjs/toolkit';
import imageReducer from './slices/imageSlice';
import apiReducer from './slices/newsApiSlice';

const store = configureStore({
  reducer: {
    api: apiReducer,
    image: imageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
