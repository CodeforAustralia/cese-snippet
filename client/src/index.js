import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import get from 'lodash/get';
// import registerServiceWorker from './registerServiceWorker';
import "style/vendor/bootstrap.global.scss";
import "repaintless/repaintless-css/repaintless.css"

import App from 'components/app';
import configureStore from 'store/configureStore';
import 'style/index.scss';

const win = typeof window !== 'undefined' ? window : global;

const preloadedSession = get(win, '__INITIAL_STATE__.session', null); // todo - deprecate when we know how the auth works
if (!preloadedSession) {
  throw new Error('No page session available at window.win.__INITIAL_STATE__.session');
}
const store = configureStore({session: preloadedSession});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// todo
// registerServiceWorker();

// Dev-server HMR
if (module.hot) {
  module.hot.accept();
}
