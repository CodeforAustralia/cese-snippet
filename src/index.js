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

if (!win.session_context) {
  throw new Error('session_context must be supplied to app to start');
}

const { session, user } = JSON.parse(win.session_context);

const bootState = {
  session: {
    "isFetching": false,
    "errorMessage": null,
    "model": session,
  },
  "staff": {
    "byId": {
      "1": user,
    },
    "isFetching": false,
    "errorMessage": null
  }
};

const store = configureStore(bootState);

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
