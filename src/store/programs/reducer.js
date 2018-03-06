import { combineReducers } from 'redux';

import initialState from 'store/initialState';

const ACTION_TYPES = {
  fetchRequest: 'PROGRAMS/FETCH_REQUEST',
  fetchSuccess: 'PROGRAMS/FETCH_SUCCESS',
  fetchError: 'PROGRAMS/FETCH_ERROR',
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

const dataReducer = (state = initialState.programs, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.programs};
    default:
      return state;
  }
};

const programsReducer = combineReducers({
  data: dataReducer,
  isFetching,
  errorMessage,
});

export default programsReducer;

