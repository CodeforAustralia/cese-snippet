import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';
import "style/vendor/bootstrap.global.scss";
import "repaintless/repaintless-css/repaintless.css"

import App from 'routes/app';
import configureStore from 'store/configureStore';
import 'style/index.scss';

const win = typeof window !== 'undefined' ? window : global;

if (!win.SNIPPET_BOOTSTRAP_STATE) {
  throw new Error('Requires bootstrap page state.');
}

const store = configureStore(...win.SNIPPET_BOOTSTRAP_STATE);

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
