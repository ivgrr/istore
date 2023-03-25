import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  id: null,
  email: null,
  token: null,
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuth = true;
    },
    removeUser(state) {
      state.id = null;
      state.email = null;
      state.token = null;
      state.isAuth = false;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, removeUser } = userSlice.actions;
