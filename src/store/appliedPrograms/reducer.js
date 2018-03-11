import { combineReducers } from 'redux';

import initialState from 'store/initialState';

export const ACTION_TYPES = {
  fetchRequest: 'APPLIED_PROGRAMS/FETCH_REQUEST',
  fetchSuccess: 'APPLIED_PROGRAMS/FETCH_SUCCESS',
  fetchError: 'APPLIED_PROGRAMS/FETCH_ERROR',
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case ACTION_TYPES.fetchRequest:
      return true;
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.fetchError:
      return false;
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTION_TYPES.fetchError:
      return payload.message;
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.fetchRequest:
      return null;
    default:
      return state;
  }
};

const data = (state = initialState.appliedPrograms, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.appliedPrograms};
    default:
      return state;
  }
};

const appliedProgramsReducer = combineReducers({
  data,
  isFetching,
  errorMessage,
});

export default appliedProgramsReducer;

