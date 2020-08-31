import ReactDOM from 'react-dom';
import { createStore, createApp } from 'app';

import './styles/index.scss';

const store = createStore({});
const app = createApp(store);

ReactDOM.render(app, window.document.getElementById('app'));
