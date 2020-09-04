import { createSlice } from '@reduxjs/toolkit';

const PAGE_PREFIX = 'user';

export const userSlice = createSlice({
  name: PAGE_PREFIX,
  initialState: {
    user: '',
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload.data;
    },
  },
});

export const { updateUser } = userSlice.actions;

export const getUserAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(
      updateUser({
        data: 'And you are one of React users.',
      }),
    );
  }, 1000);
};

export const selectUser = (state) => state[PAGE_PREFIX].user;
export default userSlice.reducer;
