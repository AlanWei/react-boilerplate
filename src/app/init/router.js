import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import map from 'lodash/map';
import routes from '../config/routes';

const propTypes = {
  history: PropTypes.object.isRequired,
};

const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <div>
      {map(routes, (route, idx) => (
        <Route key={idx} {...route} />
      ))}
    </div>
  </ConnectedRouter>
);

Router.propTypes = propTypes;
export default Router;
