import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchByFilterRequest: 'SNIPPETS/FETCH_BY_FILTER_REQUEST',
  fetchByFilterSuccess: 'SNIPPETS/FETCH_BY_FILTER_SUCCESS',
  fetchByFilterError: 'SNIPPETS/FETCH_BY_FILTER_ERROR',

  createRequest: 'SNIPPETS/CREATE',
  createSuccess: 'SNIPPETS/CREATE_SUCCESS',
  createError: 'SNIPPETS/CREATE_ERROR',

  updateFilter: 'SNIPPETS/UPDATE_FILTER',
};

export const FILTER_STATUS_TYPES = {
  IS_FETCHING: 'fetching',
  IS_FETCHING_SUCCESS: 'fetching success',
  IS_FETCHING_ERROR: 'fetching error',
};


const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.createSuccess:
      return {...state, ...payload.snippets};

    case ACTION_TYPES.fetchByFilterSuccess:
      return {...state, ...payload.snippets};
    default:
      return state;
  }
};

// [school code]_2018_[program id]

const filters = (state = {}, action) => {
  const { type, payload } = action;

  let filterKey, filterValue;

  switch (type) {

    case ACTION_TYPES.updateFilter:
      filterKey = payload.filterKey;
      filterValue = payload.filterValue;

      const newState = {...state};

      if (newState[filterKey]) {
        newState[filterKey] = [...newState[filterKey], ...filterValue];
      } else {
        newState[filterKey] = filterValue;
      }
      return newState;

    default:
      return state;
  }
};

const filtersIsFetching = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case ACTION_TYPES.fetchByFilterRequest:
      return {
        ...state,
        [payload.filterKey]: FILTER_STATUS_TYPES.IS_FETCHING,
      };
    case ACTION_TYPES.fetchByFilterSuccess:
      return {
        ...state,
        [payload.filterKey]: FILTER_STATUS_TYPES.IS_FETCHING_SUCCESS,
      };
    case ACTION_TYPES.fetchByFilterError:
      return {
        ...state,
        [payload.filterKey]: FILTER_STATUS_TYPES.IS_FETCHING_ERROR,
      };
    default:
      return state;
  }
};

const filtersIsError = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case ACTION_TYPES.fetchByFilterRequest:
    case ACTION_TYPES.fetchByFilterSuccess:
      return {
        ...state,
        [payload.filterKey]: null,
      };
    case ACTION_TYPES.fetchByFilterError:
      return {
        ...state,
        [payload.filterKey]: payload.message,
      };
    default:
      return state;
  }
};

const snippetsReducer = combineReducers({
  byId,
  filters,
  filtersIsFetching,
  filtersIsError,
});

export default snippetsReducer;

