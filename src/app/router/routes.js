import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';
import WorkInProgress from 'views/workInProgress';
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
      path="/dashboard/analysis/realtime"
      exact
      component={Loadable({
        loader: () => import('views/analysis'),
        loading: () => null,
      })}
    />
    <Route
      path="/dashboard/analysis/offline"
      exact
      component={Loadable({
        loader: () => import('views/analysis'),
        loading: () => null,
      })}
    />
    <Route
      path="/dashboard/monitor"
      exact
      component={WorkInProgress}
    />
    <Route
      path="/dashboard/workplace"
      exact
      component={WorkInProgress}
    />
    <Route
      path="/marketing"
      exact
      component={WorkInProgress}
    />
    <Route
      path="/settings/users"
      exact
      component={WorkInProgress}
    />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;
