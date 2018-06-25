import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'SESSION/FETCH_REQUEST',
  fetchSuccess: 'SESSION/FETCH_SUCCESS',
  fetchError: 'SESSION/FETCH_ERROR',
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

const model = (state = null, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return payload.session;

    default:
      return state;
  }
};

const sessionReducer = combineReducers({
  isFetching,
  errorMessage,
  model,
});

export default sessionReducer;
