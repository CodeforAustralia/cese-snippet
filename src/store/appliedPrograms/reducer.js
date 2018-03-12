import { combineReducers } from 'redux';
import uniq from 'lodash/uniq';


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
      return {...state, ...payload.appliedPrograms};
    default:
      return state;
  }
};

const filters = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.setFilter:
      const { key, ids, filterProps } = payload;

      if (state[key]) {
        const newKeyValue = {...state[key]};
        // must be free of dupes
        newKeyValue.ids = uniq([...newKeyValue.ids, ...ids]);
        state[key] = newKeyValue;
        return state;
      }

      state[key] = {
        ids: ids,
        ...filterProps,
      };

      return state;

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

