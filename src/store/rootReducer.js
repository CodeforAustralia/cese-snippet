import { combineReducers } from 'redux';

import { appReducer } from 'store/app';
import { sessionReducer } from 'store/session';
import { programsReducer } from 'store/programs';
import { appliedProgramsReducer } from 'store/appliedPrograms';
import { schoolsReducer } from 'store/schools';

const rootReducer = combineReducers({
  app: appReducer,
  session: sessionReducer,
  programs: programsReducer,
  appliedPrograms: appliedProgramsReducer,
  schools: schoolsReducer,
});

export default rootReducer;
