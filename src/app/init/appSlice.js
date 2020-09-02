import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    },
  },
});

export const { login } = appSlice.actions;

export default appSlice.reducer;
