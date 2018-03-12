import { combineReducers } from 'redux';
import merge from 'merge';

export const ACTION_TYPES = {
  fetchRequest: 'APPLIED_PROGRAMS/FETCH_REQUEST',
  fetchSuccess: 'APPLIED_PROGRAMS/FETCH_SUCCESS',
  fetchError: 'APPLIED_PROGRAMS/FETCH_ERROR',

  setFilter: 'APPLIED_PROGRAMS/SET_FILTER',
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

const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.appliedPrograms.byId};
    default:
      return state;
  }
};

const filters = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.setFilter:
      const { key, ids } = payload;
      if (state[key]) {
        const newKeyState = {...state[key]};
        newKeyState.ids = [...newKeyState.ids, ...ids];
        return merge(state, {
          [key]: newKeyState,
        });
      }
      return merge(state, {
        [key]: {
          ids: ids,
        }
      });
    default:
      return state;
  }
};

const appliedProgramsReducer = combineReducers({
  byId,
  isFetching,
  errorMessage,
  filters,
});

export default appliedProgramsReducer;

