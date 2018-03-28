import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'PROGRAMS/FETCH_REQUEST',
  fetchSuccess: 'PROGRAMS/FETCH_SUCCESS',
  fetchError: 'PROGRAMS/FETCH_ERROR',

  setFilters: 'PROGRAMS/SET_FILTERS',

  createFilters: 'PROGRAMS/CREATE_FILTERS',
  updateFilters: 'PROGRAMS/UPDATE_FILTERS',
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
  let filterKey, filterValue;

  switch (type) {

    case ACTION_TYPES.updateFilters:
      filterKey = payload.filterKey;
      filterValue = payload.filterValue;

      const newState = {...state};

      if (newState[filterKey]) {
        newState[filterKey] = [...newState[filterKey], filterValue];
      } else {
        newState[filterKey] = [filterValue];
      }
      return newState;

    case ACTION_TYPES.createFilters:
      filterKey = payload.filterKey;
      filterValue = payload.filterValue;

      // Replace filter state if it exists
      return {
        ...state,
        [filterKey]: filterValue,
      };

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

