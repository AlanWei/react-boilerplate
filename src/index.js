import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import app from './app';

import './styles/index.less';

const client = app.createStore(createBrowserHistory(), {});
const { store, history } = client;

const application = app.createApp(store, history);
app.initClient(store.dispatch);

ReactDOM.render(application, window.document.getElementById('app'));
