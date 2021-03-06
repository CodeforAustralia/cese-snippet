import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'USERS/FETCH_REQUEST',
  fetchSuccess: 'USERS/FETCH_SUCCESS',
  fetchError: 'USERS/FETCH_ERROR',
  updateRequest: 'USERS/UPDATE_REQUEST',
  updateSuccess: 'USERS/UPDATE_SUCCESS',
  updateError: 'USERS/UPDATE_ERROR',
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

export const isUpdating = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.updateRequest:
      return true;
    case ACTION_TYPES.updateSuccess:
    case ACTION_TYPES.updateError:
      return false;
    default:
      return state;
  }
};

export const errorMessage = (state = null, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTION_TYPES.fetchError:
    case ACTION_TYPES.updateError:
      return payload.message;
    case ACTION_TYPES.fetchRequest:
    case ACTION_TYPES.updateRequest:
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.updateSuccess:
      return null;
    default:
      return state;
  }
};

const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.updateSuccess:
      return {...state, ...payload.users};
    default:
      return state;
  }
};


const usersReducer = combineReducers({
  byId,
  isFetching,
  isUpdating,
  errorMessage,
});

export default usersReducer;
