import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import map from 'lodash/map';
import { IntlProvider } from 'react-intl-context';
import buildLocale from '../buildLocale';
import routes from './routes';

const propTypes = {
  history: PropTypes.object.isRequired,
};

const Router = props => (
  <ConnectedRouter history={props.history}>
    <IntlProvider
      locale={buildLocale.locale}
      messages={buildLocale.messages}
    >
      <Fragment>
        {map(routes, (route, idx) => (
          <Route key={idx} {...route} />
        ))}
      </Fragment>
    </IntlProvider>
  </ConnectedRouter>
);

Router.propTypes = propTypes;
export default Router;
