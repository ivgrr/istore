import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const loadingReducer = userSlice.reducer;
export const { setLoading } = userSlice.actions;
