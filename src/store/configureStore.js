const win = typeof window !== 'undefined' ? window : global;

import { createStore, applyMiddleware, compose } from 'redux';
import merge from 'merge';
import thunkMiddleware from 'redux-thunk';

import rootReducer from 'store/rootReducer';
import initialState from 'store/initialState';


const middlewares = [
  thunkMiddleware,
];

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

  // Dev-server HMR
  if (module && module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
