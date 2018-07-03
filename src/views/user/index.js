import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from 'assets/logo.svg';
import homeAction from '../home/action';
import action from './action';
import './style.scss';

const propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  getMessage: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

class User extends Component {
  componentDidMount() {
    const { getMessage, getUser } = this.props;
    getMessage();
    getUser();
  }

  render() {
    const { message, user } = this.props;
    return (
      <div className="user">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Link to="/">
            <h1 className="App-title">
              Welcome to React
            </h1>
          </Link>
        </header>
        <p className="App-intro">
          To get started, edit
          <code className="App-code">
            src/views/user/index.js
          </code>
          and save to reload.
        </p>
        <p className="App-intro">
          {message}
        </p>
        <p className="App-intro">
          {user}
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  message: state.home.message,
});

const mapDispatchToProps = {
  getUser: action.getUser,
  getMessage: homeAction.getMessage,
};

User.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(User);
