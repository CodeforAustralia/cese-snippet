import { combineReducers } from 'redux';

import appReducer from 'store/app/reducer';
import sessionReducer from 'store/session';
import programsReducer from 'store/programs';
import schoolsReducer from 'store/schools';

const rootReducer = combineReducers({
  app: appReducer,
  session: sessionReducer,
  programs: programsReducer,
  schools: schoolsReducer,
});

export default rootReducer;
