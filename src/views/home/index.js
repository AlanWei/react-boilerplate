import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from 'assets/logo.svg';
import action from './action';
import './style.scss';

const propTypes = {
  message: PropTypes.string.isRequired,
  getMessage: PropTypes.func.isRequired,
};

class Home extends Component {
  componentDidMount() {
    const { getMessage } = this.props;
    getMessage();
  }

  render() {
    const { message } = this.props;

    return (
      <div className="home">
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
            src/views/home/index.js
          </code>
          and save to reload.
        </p>
        <Link to="/user" href="/user">
          <p className="App-intro">
            {message}
          </p>
        </Link>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Home);
