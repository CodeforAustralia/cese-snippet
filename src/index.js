import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import registerServiceWorker from './registerServiceWorker';

import "bootstrap/scss/bootstrap.scss";

import 'style/index.scss';
import App from 'components/app';
import configureStore from 'store/configureStore';

ReactDOM.render(<App />, document.getElementById('root'));

const store = configureStore();

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
