import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchRequest: 'SNIPPETS/FETCH_REQUEST',
  fetchSuccess: 'SNIPPETS/FETCH_SUCCESS',
  fetchError: 'SNIPPETS/FETCH_ERROR',

  setFilters: 'SNIPPETS/SET_FILTERS',

  createFilters: 'SNIPPETS/CREATE_FILTERS',
  updateFilters: 'SNIPPETS/UPDATE_FILTERS',
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

export const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return {...state, ...payload.snippets};
    default:
      return state;
  }
};


// [school code]_2018_[program id]

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

const snippetsReducer = combineReducers({
  byId,
  isFetching,
  errorMessage,
  filters,
});

export default snippetsReducer;

