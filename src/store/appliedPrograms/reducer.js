import { combineReducers } from 'redux';

import initialState from 'store/initialState';

const ACTION_TYPES = {
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
  switch (action.type) {
    case ACTION_TYPES.fetchError:
      return action.message;
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.fetchRequest:
      return null;
    default:
      return state;
  }
};

const dataReducer = (state = initialState.appliedPrograms, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.appliedPrograms};
    default:
      return state;
  }
};

const appliedProgramsReducer = combineReducers({
  data: dataReducer,
  isFetching,
  errorMessage,
});

export default appliedProgramsReducer;

