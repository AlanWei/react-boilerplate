import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import map from 'lodash/map';

import routes from './routes';

const createApp = (store) => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {map(routes, (route, idx) => (
            <Route key={idx} {...route} />
          ))}
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export default createApp;
