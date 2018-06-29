import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Cookies from 'js-cookie';
// import registerServiceWorker from './registerServiceWorker';
import "style/vendor/bootstrap.global.scss";
import "repaintless/repaintless-css/repaintless.css"

import App from 'routes/app';
import configureStore from 'store/configureStore';
import 'style/index.scss';


if (typeof Cookies.get('snippet_session') === 'undefined') {
  Cookies.set('snippet_session', {
    session: {
      "isFetching": false,
      "errorMessage": null,
      "model": {
        "id": "1",
        "staffId": "grace.chang",
        "nonGovUser": false,
        "preferences": "{}",
        "creationDate": "2018-06-21",
        "lastLogin": "2018-06-21",
        "userMessage": null,
        "enabled": true,
        "accountNonExpired": true,
        "credentialsNonExpired": true,
        "accountNonLocked": true
      }
    },
    staff: {
      "byId": {
        "1": {
          "id": "1",
          "teacherId": "grace.chang",
          "email": "grace.chang@test.det.nsw.edu.au",
          "firstName": "Grace",
          "lastName": "Chang",
          "schools": ["4548"]
        }
      },
      "isFetching": false,
      "errorMessage": null
    }
  })
}

const store = configureStore(JSON.parse(Cookies.get('snippet_session')));

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
