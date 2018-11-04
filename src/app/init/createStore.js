import {
  createStore as createReduxStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import home from 'views/home/reducer';
import user from 'views/user/reducer';
import app from '../reducer';
import routes from '../config/routes';

function createStore(history, preloadedState = {}) {
  // enhancers
  let composeEnhancers = compose;

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  }

  // middlewares
  const middlewares = [routerMiddleware(history), reduxThunk];

  const store = createReduxStore(
    connectRouter(history)(combineReducers({
      router: connectRouter(history),
      home,
      user,
      app,
    })),
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares)),
  );

  return {
    store,
    history,
    routes,
  };
}

export default createStore;
