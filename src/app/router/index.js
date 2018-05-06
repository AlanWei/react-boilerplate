import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl-context';
import BasicLayout from 'layouts/BasicLayout';
import { messages, buildConfig } from '../buildConfig';
import menuData from './menu';
import Routes from './routes';

const { locale, appName } = buildConfig;

const propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const Router = props => (
  <ConnectedRouter history={props.history}>
    <IntlProvider
      locale={locale}
      messages={messages}
    >
      <BasicLayout
        appName={appName}
        menuData={menuData}
        location={props.location}
      >
        <Routes />
      </BasicLayout>
    </IntlProvider>
  </ConnectedRouter>
);

const mapStateToProps = state => ({
  location: state.router.location || {},
});

Router.propTypes = propTypes;
export default connect(mapStateToProps)(Router);
