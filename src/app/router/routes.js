import React, { Fragment } from 'react';
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom';

const Routes = () => (
  <Fragment>
    <Route
      path="/"
      exact
      component={Loadable({
        loader: () => import('views/home'),
        loading: () => null,
      })}
    />
    <Route
      path="/analysis"
      exact
      component={Loadable({
        loader: () => import('views/analysis'),
        loading: () => null,
      })}
    />
  </Fragment>
);

export default Routes;
