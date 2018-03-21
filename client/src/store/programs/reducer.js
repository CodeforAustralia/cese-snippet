import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'PROGRAMS/FETCH_REQUEST',
  fetchSuccess: 'PROGRAMS/FETCH_SUCCESS',
  fetchError: 'PROGRAMS/FETCH_ERROR',

  setFilters: 'PROGRAMS/SET_FILTERS',
};

export const isFetching = (state = false, action) => {
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

export const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.programs};
    default:
      return state;
  }
};

export const filters = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {

    case ACTION_TYPES.setFilters:
      const newState = {...state};
      for (let filterKey in payload.filters) {
        if (newState[filterKey]) {
          newState[filterKey] = [...newState[filterKey], filters[filterKey]];
        } else {
          newState[filterKey] = filters[filterKey];
        }
      }
      return newState;

    default:
      return state;
  }
};

const programsReducer = combineReducers({
  byId,
  isFetching,
  errorMessage,
  filters,
});

export default programsReducer;

