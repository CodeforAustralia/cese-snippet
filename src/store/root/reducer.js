import { combineReducers } from 'redux';

import appReducer from 'store/app';
import usersReducer from 'store/users';
import sessionReducer from 'store/session';
import programsReducer from 'store/programs';
import schoolsReducer from 'store/schools';
import cmsReducer from 'store/cms';

const rootReducer = combineReducers({
  app: appReducer,
  users: usersReducer,
  session: sessionReducer,
  programs: programsReducer,
  schools: schoolsReducer,
  cms: cmsReducer,
});

export default rootReducer;
