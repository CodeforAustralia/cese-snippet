import get from 'lodash/get';
import {
  getFilterKey,
  parseFilterKeys,
} from "./helpers";


export const selectIsFetching = (state) => {
  return get(state, 'programs.isFetching', null);
};

export const selectProgram = (state, id) => {
  return get(state, `programs.byId[${id}]`, null);
};

/**
 * @param state
 * @param ids
 * @returns {Array<Programs>}
 */
export const selectPrograms = (state, ids) => {
  return ids.map(id => {
      return selectProgram(state, id)
    }).filter(program => {
      return program !== null;
    });
};

export const selectProgramsByFilterKey = (state, filterProps) => {
  const filterKey = getFilterKey(filterProps);
  const filteredIds = get(state, `programs.filters[${filterKey}]`, []);
  return selectPrograms(state, filteredIds);
};

export const selectAllFilterKeys = (state) => {
  const keys = Object.keys(state.programs.filters);
  if (keys.length) {
    return parseFilterKeys(keys);
  }
  return keys;
};
