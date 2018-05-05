import get from 'lodash/get';
import isWithinRange from 'date-fns/is_within_range';

export const selectStatic = (state = {}) => {
  return state.static;
};

export const selectSchoolsList = (state) => {
  return state.static.schoolsList;
};

export const selectStaffList = (state) => {
  return state.static.staffList;
};

export const selectCurrentTerm = (state, date = new Date()) => {
  const terms = get(state, 'static.termDates', []);
  const withinTerm = terms.find(term => {
    return isWithinRange(date, term.start, term.end);
  });
  if (withinTerm) {
    return withinTerm.term;
  }
  return [1,2,3,4];
};
