import get from 'lodash/get';


export const selectIsFetching = (state) => {
  return get(state, 'schools.isFetching', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'schools.errorMessage', null);
};

/**
 * @param state {Object}
 * @param code {String}
 * @returns {Object} School
 */
export const selectSchool = (state, code) => {
  return get(state, `schools.byCode[${code}]`, null);
};

/**
 * @param state {Object}
 * @param codes {Array}
 * @param {Array} Schools
 */
export const selectSchools = (state, codes = null) => {
  if (!codes) {
    const schoolsSet = get(state, 'schools.byCode', null);
    return Object.values(schoolsSet);
  }
  return codes.map(code => {
    return selectSchool(state, code);
  }).filter(school => {
    return school !== null;
  });
};
