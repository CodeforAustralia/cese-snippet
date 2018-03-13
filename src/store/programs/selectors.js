import get from 'lodash/get';
import { getFilterKey } from './helpers';


export const selectPrograms = (state, ids) => {
  return ids.map(id => state.programs.byId[id]);
};

export const selectProgramsByFilter = (state, code, year) => {
  const filterKey = getFilterKey(code, year);
  const filteredIds = get(state, `programs.filters[${filterKey}].ids`, null);

  if (filteredIds) {
    return selectPrograms(state, filteredIds);
  }
  return null;
};

