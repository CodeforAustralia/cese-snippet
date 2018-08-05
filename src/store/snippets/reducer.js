import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchSuccess: 'SNIPPETS/FETCH_SUCCESS',

  createFilter: 'SNIPPETS/CREATE_FILTER',
  updateFilter: 'SNIPPETS/UPDATE_FILTER',

  updateByFilterRequest: 'SNIPPETS/UPDATE_BY_FILTER_REQUEST',
  updateByFilterSuccess: 'SNIPPETS/UPDATE_BY_FILTER_SUCCESS',
  updateByFilterError: 'SNIPPETS/UPDATE_BY_FILTER_ERROR',

  fetchByFilterRequest: 'SNIPPETS/FETCH_BY_FILTER_REQUEST',
  fetchByFilterSuccess: 'SNIPPETS/FETCH_BY_FILTER_SUCCESS',
  fetchByFilterError: 'SNIPPETS/FETCH_BY_FILTER_ERROR',
};

const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
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
        newState[filterKey] = [...newState[filterKey], filterValue];
      } else {
        newState[filterKey] = [filterValue];
      }
      return newState;

    case ACTION_TYPES.createFilter:
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

// export const isFetchingByFilter

// fetchByFilterRequest
// fetchByFilterSuccess
// fetchByFilterError

export const FILTER_STATUS_TYPES = {
  IS_FETCHING: 'fetching',
  IS_FETCHING_SUCCESS: 'fetching success',
  IS_FETCHING_ERROR: 'fetching error',
  IS_UPDATING: 'updating',
  IS_UPDATING_SUCCESS: 'updating success',
  IS_UPDATING_ERROR: 'updating error',
};

const filtersStatus = (state = {}, action) => {
  const { type, payload } = action;
  switch(type) {
    case ACTION_TYPES.fetchByFilterRequest:
      return {
        ...state,
        [payload.filterKey]: { status: FILTER_STATUS_TYPES.IS_FETCHING, }
      };
    case ACTION_TYPES.fetchByFilterSuccess:
      return {
        ...state,
        [payload.filterKey]: { status: FILTER_STATUS_TYPES.IS_FETCHING_SUCCESS, }
      };
    case ACTION_TYPES.fetchByFilterError:
      const {  } = payload;
      return {
        ...state,
        [payload.filterKey]: { status: FILTER_STATUS_TYPES.IS_FETCHING_ERROR, message: payload.message, }
      };
    case ACTION_TYPES.updateByFilterRequest:
      return {
        ...state,
        [payload.filterKey]: { status: FILTER_STATUS_TYPES.IS_UPDATING, }
      };
    case ACTION_TYPES.updateByFilterSuccess:
      return {
        ...state,
        [payload.filterKey]: { status: FILTER_STATUS_TYPES.IS_UPDATING_SUCCESS, }
      };
    case ACTION_TYPES.updateByFilterError:
      const {  } = payload;
      return {
        ...state,
        [payload.filterKey]: { status: FILTER_STATUS_TYPES.IS_UPDATING_ERROR, message: payload.message, }
      };
    default:
      return state;
  }
};

const snippetsReducer = combineReducers({
  byId,
  filters,
  filtersStatus,
});

export default snippetsReducer;

