import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import homeReducer from 'views/home/homeSlice';
import user from 'views/user/reducer';
import appReducer from './appSlice';

function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      app: appReducer,
      home: homeReducer,
      user,
    },
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  return store;
}

export default createStore;
