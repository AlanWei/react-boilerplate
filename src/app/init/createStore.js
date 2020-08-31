import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import home from 'views/home/reducer';
import user from 'views/user/reducer';
import app from '../reducer';

function createStore(preloadedState = {}) {
  const store = configureStore({
    reducer: {
      home,
      user,
      app,
    },
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  return store;
}

export default createStore;
