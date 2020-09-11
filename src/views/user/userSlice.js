import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const PAGE_PREFIX = 'user';

export const fetchUser = createAsyncThunk(
  `${PAGE_PREFIX}/fetchUser`,
  async () => {
    const response = await api.get('/user');
    return response.data.value;
  },
);

export const userSlice = createSlice({
  name: PAGE_PREFIX,
  initialState: {
    status: 'idle',
    user: '',
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchUser.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const selectStatus = (state) => state[PAGE_PREFIX].status;
export const selectUser = (state) => state[PAGE_PREFIX].user;
export default userSlice.reducer;
