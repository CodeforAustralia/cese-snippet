import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';

import 'style/index.scss';
import App from 'components/app';
import configureStore from 'store/configureStore';

ReactDOM.render(<App />, document.getElementById('root'));

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div id="app">
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
