import get from 'lodash/get';
import {
  getFilterKey,
  parseFilterKeys,
} from "./helpers";
import { FILTER_STATUS_TYPES } from './reducer';

export const selectProgram = (state, id) => {
  return get(state, `programs.byId[${id}]`, null);
};

export const selectPrograms = (state, ids) => {
  return ids.map(id => {
    return selectProgram(state, id)
  }).filter(program => {
    return program !== null;
  });
};

export const selectIsFetching = (state) => {
  return get(state, 'programs.isFetching', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'programs.errorMessage', null);
};

export const selectProgramsByFilter = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const filteredIds = get(state, `programs.filters[${filterKey}]`, []);
  return selectPrograms(state, filteredIds);
};

export const selectIsFetchingByFilter = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const filterStatus = get(state, `programs.filtersIsFetching[${filterKey}]`, null);
  if (filterStatus) {
    return filterStatus === FILTER_STATUS_TYPES.IS_FETCHING;
  }
  return null;
};

export const selectErrorMessageByFilter = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  return get(state, `programs.filtersIsError[${filterKey}]`, null);
};


export const selectAllFilterKeys = (state) => {
  const keys = Object.keys(state.programs.filters);
  if (keys.length) {
    return parseFilterKeys(keys);
  }
  return keys;
};
