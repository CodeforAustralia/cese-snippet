import { combineReducers } from 'redux';

import appReducer from 'store/app';
import sessionReducer from 'store/session';
import programsReducer from 'store/programs';
import schoolsReducer from 'store/schools';
import programTemplatesReducer from 'store/programTemplates';

const rootReducer = combineReducers({
  app: appReducer,
  session: sessionReducer,
  programs: programsReducer,
  schools: schoolsReducer,
  programTemplates: programTemplatesReducer,
});

export default rootReducer;
