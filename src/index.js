import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "style/vendor/bootstrap.global.scss";
import "repaintless/repaintless-css/repaintless.css"

import Root from 'routes/root';
import configureStore from 'store/configureStore';
import { fetchSessionFromPageState } from 'store/session/actionCreators';
import 'style/index.scss';


const win = typeof window !== 'undefined' ? window : global;

if (!win.session) {
  throw new Error(`window.session must be provided.`);
}

const store = configureStore();
store.dispatch(fetchSessionFromPageState(win.session));

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

// Dev-server HMR
if (module.hot) {
  module.hot.accept();
}
