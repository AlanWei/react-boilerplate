import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { fetchUser, selectStatus, selectUser } from './userSlice';
import { selectMessage } from '../home/homeSlice';
import './style.scss';

export default function User() {
  const status = useSelector(selectStatus);
  const user = useSelector(selectUser);
  const message = useSelector(selectMessage);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser());
    }
  }, [status, dispatch]);

  return (
    <div className="user">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">
          <h1 className="App-title">Welcome to React</h1>
        </Link>
      </header>
      <p className="App-intro">
        To get started, edit
        <code className="App-code">src/views/user/index.js</code>
        and save to reload.
      </p>
      <p className="App-intro">{message}</p>
      <p className="App-intro">{user}</p>
    </div>
  );
}
