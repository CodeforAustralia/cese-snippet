import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'CMS/FETCH_REQUEST',
  fetchSuccess: 'CMS/FETCH_SUCCESS',
  fetchError: 'CMS/FETCH_ERROR',
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
      return {...state, ...payload.cms};
    default:
      return state;
  }
};

const cmsReducer = combineReducers({
  model,
  isFetching,
  errorMessage,
});

export default cmsReducer;
