import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, createApp } from 'app';

import './styles/index.scss';

const { store, history } = createStore(createBrowserHistory(), {});
const app = createApp(store, history);

ReactDOM.render(app, window.document.getElementById('app'));
