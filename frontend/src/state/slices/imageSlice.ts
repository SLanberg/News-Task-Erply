import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageState {
  loading: Record<number, boolean>;
}

const initialState: ImageState = {
  loading: {},
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<{ id: number; loading: boolean }>) => {
      const { id, loading } = action.payload;
      state.loading[id] = loading;
    },
  },
});

export const { setLoading } = imageSlice.actions;
export default imageSlice.reducer;