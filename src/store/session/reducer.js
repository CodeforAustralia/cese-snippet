import { combineReducers } from 'redux';

import initialState from 'store/initialState';

export const ACTION_TYPES = {
  fetchRequest: 'SESSION/FETCH_REQUEST',
  fetchSuccess: 'SESSION/FETCH_SUCCESS',
  fetchError: 'SESSION/FETCH_ERROR',
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

const dataReducer = (state = initialState.session.data, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return payload.session;
    default:
      return state;
  }
};

const sessionReducer = combineReducers({
  data: dataReducer,
  isFetching,
  errorMessage,
});

export default sessionReducer;

