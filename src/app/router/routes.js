import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import NotFound from 'views/notFound';

const Routes = () => (
  <Switch>
    <Route
      path="/"
      exact
      component={Loadable({
        loader: () => import('views/home'),
        loading: () => null,
      })}
    />
    <Route
      path="/dashboard/analysis"
      exact
      component={Loadable({
        loader: () => import('views/analysis'),
        loading: () => null,
      })}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
