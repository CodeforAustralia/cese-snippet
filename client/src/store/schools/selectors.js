import get from 'lodash/get';

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
export const selectSchools = (state, codes = []) => {
  return codes.map(code => {
    return selectSchool(state, code);
  }).filter(school => {
    return school !== null;
  });
};
