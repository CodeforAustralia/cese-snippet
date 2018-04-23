import { combineReducers } from 'redux';

import appReducer from 'store/app';
import staffReducer from 'store/staff';
import sessionReducer from 'store/session';
import programsReducer from 'store/programs';
import schoolsReducer from 'store/schools';
import programTemplatesReducer from 'store/programTemplates';
import staticReducer from 'store/static';

const rootReducer = combineReducers({
  app: appReducer,
  staff: staffReducer,
  session: sessionReducer,
  programs: programsReducer,
  schools: schoolsReducer,
  programTemplates: programTemplatesReducer,
  static: staticReducer,
});

export default rootReducer;
