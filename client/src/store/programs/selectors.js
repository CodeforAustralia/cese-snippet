import get from 'lodash/get';
import { getFilterKey } from './helpers';


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

export const selectProgramsByFilter = (state, code, year) => {
  const filterKey = getFilterKey(code, year);
  const filteredIds = get(state, `programs.filters[${filterKey}].ids`, null);

  if (filteredIds) {
    return selectPrograms(state, filteredIds);
  }
  return null;
};

