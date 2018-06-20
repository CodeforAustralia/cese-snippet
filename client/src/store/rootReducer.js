import { combineReducers } from 'redux';

import appReducer from 'store/app';
import staffReducer from 'store/staff';
import sessionReducer from 'store/session';
import programsReducer from 'store/programs';
import schoolsReducer from 'store/schools';
import programTemplatesReducer from 'store/programTemplates';
import cmsReducer from 'store/cms';

const rootReducer = combineReducers({
  app: appReducer,
  staff: staffReducer,
  session: sessionReducer,
  programs: programsReducer,
  schools: schoolsReducer,
  programTemplates: programTemplatesReducer,
  cms: cmsReducer,
});

export default rootReducer;
