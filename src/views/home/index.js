import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl-context';
import BasicLayout from 'layouts/BasicLayout';
import action from './action';
import './style.scss';

const propTypes = {
  message: PropTypes.string.isRequired,
  getMessage: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired,
};

class Home extends Component {
  componentDidMount() {
    this.props.getMessage();
  }

  render() {
    return (
      <BasicLayout contentClassName="view-home">
        <p>{this.props.message}</p>
        <p>{this.props.intl.formatMessage({ id: 'test' })}</p>
      </BasicLayout>
    );
  }
}

const mapStateToProps = state => ({
  message: state.home.message,
});

const mapDispatchToProps = {
  getMessage: action.getMessage,
};

Home.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(injectIntl(Home));
