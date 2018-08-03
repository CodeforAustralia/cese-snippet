import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'SCHOOLS/FETCH_REQUEST',
  fetchSuccess: 'SCHOOLS/FETCH_SUCCESS',
  fetchError: 'SCHOOLS/FETCH_ERROR',
};

export const isFetching = (state = null, action) => {
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

export const errorMessage = (state = null, action) => {
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

export const byCode = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.schools};
    default:
      return state;
  }
};

const schoolsReducer = combineReducers({
  byCode,
  isFetching,
  errorMessage,
});

export default schoolsReducer;

