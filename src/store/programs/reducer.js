import { combineReducers } from 'redux';

export const ACTION_TYPES = {
  fetchByFilterRequest: 'PROGRAMS/FETCH_BY_FILTER_REQUEST',
  fetchByFilterSuccess: 'PROGRAMS/FETCH_BY_FILTER_SUCCESS',
  fetchByFilterError: 'PROGRAMS/FETCH_BY_FILTER_ERROR',

  fetchRequest: 'PROGRAMS/FETCH_REQUEST',
  fetchSuccess: 'PROGRAMS/FETCH_SUCCESS',
  fetchError: 'PROGRAMS/FETCH_ERROR',
  createRequest: 'PROGRAMS/CREATE_REQUEST',
  createSuccess: 'PROGRAMS/CREATE_SUCCESS',
  createError: 'PROGRAMS/CREATE_ERROR',
  updateRequest: 'PROGRAMS/UPDATE_REQUEST',
  updateSuccess: 'PROGRAMS/UPDATE_SUCCESS',
  updateError: 'PROGRAMS/UPDATE_ERROR',

  updateFilter: 'PROGRAMS/UPDATE_FILTER',
};

export const FILTER_STATUS_TYPES = {
  IS_FETCHING: 'fetching',
  IS_FETCHING_SUCCESS: 'fetching success',
  IS_FETCHING_ERROR: 'fetching error',
};

export const isFetching = (state = null, action) => {
  switch (action.type) {
    case ACTION_TYPES.fetchRequest:
    case ACTION_TYPES.fetchByFilterRequest:
      return true;
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.fetchByFilterSuccess:
    case ACTION_TYPES.fetchError:
    case ACTION_TYPES.fetchByFilterError:
      return false;
    default:
      return state;
  }
};

export const errorMessage = (state = null, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTION_TYPES.fetchError:
    case ACTION_TYPES.fetchByFilterError:
      return payload.message;
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.fetchByFilterSuccess:
    case ACTION_TYPES.fetchRequest:
    case ACTION_TYPES.fetchByFilterRequest:
      return null;
    default:
      return state;
  }
};

export const byId = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.createSuccess:
    case ACTION_TYPES.updateSuccess:
    case ACTION_TYPES.fetchSuccess:
    case ACTION_TYPES.fetchByFilterSuccess:
      return {...state, ...payload.programs};
    default:
      return state;
  }
};

export const filters = (state = {}, action) => {
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

const programsReducer = combineReducers({
  byId,
  isFetching,
  errorMessage,
  filters,
  filtersIsFetching,
  filtersIsError,
});

export default programsReducer;

