import get from 'lodash/get';
import { parseFilterKeys } from "./helpers";

export const selectProgram = (state, id) => {
  return state.programs.byId[id];
};

/**
 * @param state
 * @param ids
 * @returns {Array<Programs>}
 */
export const selectPrograms = (state, ids) => {
  return ids.map(id => selectProgram(state, id));
};

export const selectProgramsByFilterKey = (state, filterKey) => {
  const filteredIds = get(state, `programs.filters[${filterKey}].ids`, null);

  if (filteredIds) {
    return selectPrograms(state, filteredIds);
  }
  return null;
};

export const selectAllFilterKeys = (state) => {
  const keys = Object.keys(state.programs.filters);
  console.log('selectAllFilterKeys', keys)
  if (keys.length) {
    console.log('selectAllFilterKeys', keys)
    return parseFilterKeys(keys);
  }


  return keys;
};

