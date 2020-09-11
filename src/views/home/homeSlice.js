import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../utils/api';

const PAGE_PREFIX = 'home';

export const fetchMessage = createAsyncThunk(
  `${PAGE_PREFIX}/fetchMessage`,
  async () => {
    const response = await api.get('/message');
    return response.data.value;
  },
);

export const homeSlice = createSlice({
  name: PAGE_PREFIX,
  initialState: {
    status: 'idle',
    message: '',
    error: '',
  },
  reducers: {},
  extraReducers: {
    [fetchMessage.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchMessage.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.message = action.payload;
    },
    [fetchMessage.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const selectStatus = (state) => state[PAGE_PREFIX].status;
export const selectMessage = (state) => state[PAGE_PREFIX].message;
export default homeSlice.reducer;
