import get from 'lodash/get';
import { getFilterKey } from './helpers';


export const selectAppliedPrograms = (state, ids) => {
  return ids.map(id => state.appliedPrograms.map(p => p.id === id));
};

export const selectAppliedProgramsByFilter = (state, code, year) => {
  const filterKey = getFilterKey(code, year);
  const filteredIds = get(state, `appliedPrograms.filters[${filterKey}].ids`, null);

  if (filteredIds) {
    return selectAppliedPrograms(state, filteredIds);
  }
};
