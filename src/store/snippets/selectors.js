import get from 'lodash/get';
import { getFilterKey } from "./helpers";
import { FILTER_STATUS_TYPES } from './reducer';

const selectSnippet = (state, id) => {
  return get(state, `snippets.byId[${id}]`, null);
};

const selectSnippets = (state, ids) => {
  return ids.map(id => {
    return selectSnippet(state, id);
  }).filter(snippet => {
    return snippet !== null;
  })
};

export const selectSnippetsByFilter = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const filteredIds = get(state, `snippets.filters[${filterKey}]`, []);
  return selectSnippets(state, filteredIds);
};

export const selectIsFetchingByFilter = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const filterStatus = get(state, `snippets.filtersStatus[${filterKey}]`, null);
  if (filterStatus) {
    return filterStatus.status === FILTER_STATUS_TYPES.IS_FETCHING;
  }
  return false;
};

export const selectIsUpdatingByFilter = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const filterStatus = get(state, `snippets.filtersStatus[${filterKey}]`, null);
  if (filterStatus) {
    return filterStatus.status === FILTER_STATUS_TYPES.IS_UPDATING;
  }
  return false;
};

