import React from 'react';
import { Provider } from 'react-redux';
import Router from './router';

const createApp = (store, history) => (
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history} />
    </Provider>
  </React.StrictMode>
);

export default createApp;
