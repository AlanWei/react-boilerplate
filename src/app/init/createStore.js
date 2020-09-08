import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import homeReducer from '../../views/home/homeSlice';
import userReducer from '../../views/user/userSlice';
import appReducer from './appSlice';

function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      app: appReducer,
      home: homeReducer,
      user: userReducer,
    },
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  return store;
}

export default createStore;
