import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'STAFF/FETCH_REQUEST',
  fetchSuccess: 'STAFF/FETCH_SUCCESS',
  fetchError: 'STAFF/FETCH_ERROR',
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

const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.staff};
    default:
      return state;
  }
};


const staffReducer = combineReducers({
  byId,
  isFetching,
  errorMessage,
});

export default staffReducer;
