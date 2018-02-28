import { h } from 'preact';
import { Provider } from 'unistore/preact';

import 'style/index.scss';
import App from 'components/app';
import store from 'store';

if (module.hot) {
  require('preact/debug');
}

const Root = () => (
  <Provider store={store}>
    <div id="app">
      <App />
    </div>
  </Provider>
);

export default Root;
