import { createSlice } from '@reduxjs/toolkit';

const PAGE_PREFIX = 'home';

export const homeSlice = createSlice({
  name: PAGE_PREFIX,
  initialState: {
    message: '',
  },
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload.data;
    },
  },
});

export const { updateMessage } = homeSlice.actions;

export const getMessageAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(
      updateMessage({
        data: 'React is awesome!',
      }),
    );
  }, 1000);
};

export const selectMessage = (state) => state[PAGE_PREFIX].message;
export default homeSlice.reducer;
