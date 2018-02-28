import { h } from 'preact';
import { Provider } from 'preact-redux';

import 'style/index.scss';
import App from 'components/app';
import configureStore from 'store/configureStore';

if (module.hot) {
  require('preact/debug');
}

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <div id="app">
      <App />
    </div>
  </Provider>
);

export default Root;
