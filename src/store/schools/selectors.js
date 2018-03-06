/**
 * @param state {Object}
 * @param code {String}
 * @returns {Object} School
 */
export const selectSchoolByCode = (state, code) => {
  const school = state.schools[code];
  if (typeof school === 'undefined') {
    throw new Error(`School not found for school code: ${code}`);
  }
  return school;
};

/**
 * @param state {Object}
 * @param codes {Array}
 * @param {Array} Schools
 */
export const selectSchoolsByCode = (state, codes = []) => {
  return codes.map(code => {
    return selectSchoolByCode(state, code);
  });
};
