import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "style/vendor/bootstrap.global.scss";
import "repaintless/repaintless-css/repaintless.css"

import App from 'routes/app';
import configureStore from 'store/configureStore';
import { setSession } from 'store/session/actionCreators';
import { setUser } from 'store/users/actionCreators';
import { createCms } from 'store/cms/actionCreators';
import 'style/index.scss';


const win = typeof window !== 'undefined' ? window : global;

if (!win.session_context) {
  throw new Error('session_context must be supplied to app to start');
}

const context = JSON.parse(win.session_context);

if (!context.session || !context.user || !context.cms) {
  throw new Error(`session_context must supply keys "session", "user", "cms". It supplied ${Object.keys(context)}`);
}

const store = configureStore();

store.dispatch(setSession(context.session));
store.dispatch(setUser(context.user));
store.dispatch(createCms(context.cms));


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// Dev-server HMR
if (module.hot) {
  module.hot.accept();
}
