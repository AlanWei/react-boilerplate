import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';
import home from 'views/home/reducer';
import user from 'views/user/reducer';
import app from '../reducer';
import routes from '../config/routes';

function createStore(history, preloadedState = {}) {
  const store = configureStore({
    reducer: {
      router: connectRouter(history),
      home,
      user,
      app,
    },
    middleware: [...getDefaultMiddleware()],
    preloadedState,
  });

  return {
    store,
    history,
    routes,
  };
}

export default createStore;
