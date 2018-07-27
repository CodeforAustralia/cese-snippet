/* global process */
import { createStore, applyMiddleware, compose } from 'redux';
import merge from 'lodash/merge';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from 'store/root/reducer';
import initialState from 'store/root/initialState';
import api from './apiInterface';

const win = typeof window !== 'undefined' ? window : global;


const middlewares = [
  thunk.withExtraArgument(api),
];

if (process.env.NODE_ENV === 'development' || process.env.REACT_APP_DEBUG === true) {
  middlewares.push(createLogger({
    collapsed: true,
  }));
}

const composeEnhancers = typeof win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function' ?
  win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
  compose;


const configureStore = (bootState = {}) => {

  const store = createStore(
    rootReducer,
    merge(initialState, bootState),
    composeEnhancers(
      applyMiddleware(...middlewares)
    )
  );

  // make reducers HMRable
  if (module && module.hot) {
    module.hot.accept('./root/reducer', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
