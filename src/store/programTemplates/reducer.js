import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchSuccess: 'PROGRAM_TEMPLATES/FETCH_SUCCESS',
};

const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return payload.programTemplates;
    default:
      return state;
  }
};

const programTemplatesReducer = combineReducers({
  byId,
});

export default programTemplatesReducer;
