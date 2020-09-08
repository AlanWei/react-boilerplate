import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/logo.svg';
import { getMessageAsync, selectMessage } from './homeSlice';
import './style.scss';

export default function Home() {
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();
  dispatch(getMessageAsync());

  return (
    <div className="home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">
          <h1 className="App-title">Welcome to React</h1>
        </Link>
      </header>
      <p className="App-intro">
        To get started, edit
        <code className="App-code">src/views/home/index.js</code>
        and save to reload.
      </p>
      <Link to="/user" href="/user">
        <p className="App-intro">{message}</p>
      </Link>
    </div>
  );
}
