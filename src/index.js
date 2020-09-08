import { render } from 'react-dom';
import { createStore, createApp } from './app';

import './styles/index.scss';

const RENDER_CONTAINER = document.getElementById('app');

const store = createStore();
const app = createApp(store);

render(app, RENDER_CONTAINER);
