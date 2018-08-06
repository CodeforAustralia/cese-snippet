import get from 'lodash/get';

export const selectIsFetching = (state) => {
  return get(state, 'schools.isFetching', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'schools.errorMessage', null);
};

export const selectSchool = (state, code) => {
  return get(state, `schools.byCode[${code}]`, null);
};

export const selectSchools = (state, codes = null) => {
  if (!codes) {
    return Object.values(state.schools.byCode);
  }
  return codes.map(code => {
    return selectSchool(state, code);
  }).filter(school => {
    return school !== null;
  });
};
