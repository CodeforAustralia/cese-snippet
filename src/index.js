import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import "style/vendor/bootstrap.global.scss";
import "repaintless/repaintless-css/repaintless.css"

import App from 'routes/app';
import configureStore from 'store/configureStore';
import { fetchSuccess as fetchSessionSuccess } from 'store/session/actionCreators';
import { fetchSuccess as fetchUserSuccess } from 'store/users/actionCreators';
import { fetchSuccess as fetchCmsSuccess } from 'store/cms/actionCreators';
import { fetchSuccess as fetchSchoolsSuccess } from 'store/schools/actionCreators';
import { fetchSuccess as fetchProgramTemplatesSuccess } from 'store/programTemplates/actionCreators';
import 'style/index.scss';


const win = typeof window !== 'undefined' ? window : global;

if (!win.session_context) {
  throw new Error('session_context must be supplied to app to start');
}

const context = JSON.parse(win.session_context);

if (
  !context.session ||
  !context.sessionUser ||
  !context.cms ||
  !context.schools ||
  !context.programTemplates
) {
  throw new Error(`session_context must supply keys "session", "sessionUser", "cms", "schools", "programTemplates". It supplied ${Object.keys(context)}`);
}

const store = configureStore();
store.dispatch(fetchSessionSuccess(context.session));
store.dispatch(fetchUserSuccess(context.sessionUser));
store.dispatch(fetchCmsSuccess(context.cms));
store.dispatch(fetchSchoolsSuccess(context.schools));
store.dispatch(fetchProgramTemplatesSuccess(context.programTemplates));

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
