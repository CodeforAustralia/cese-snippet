import get from 'lodash/get';

/**
 * @param state {Object}
 * @param code {String}
 * @returns {Object} School
 */
export const selectSchool = (state, code) => {
  return get(state, `schools.data[${code}]`);
};

/**
 * @param state {Object}
 * @param codes {Array}
 * @param {Array} Schools
 */
export const selectSchools = (state, codes = []) => {
  return codes.map(code => {
    return selectSchool(state, code);
  });
};
