/**
 * @param state {Object}
 * @param code {String}
 * @returns {Object} School
 */
export const selectSchool = (state, code) => {
  return state.schools.data.find(school => school.code === code);
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
