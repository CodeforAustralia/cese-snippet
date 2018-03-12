/**
 * @param state
 * @param code {String}
 * @param year {String}
 */
export const selectAppliedPrograms = (state, code, year = null) => {

  return state.appliedPrograms.data.filter(program => {
    if (program.schoolCode === code) {
      if (year) {
        return program.year === year;
      } else {
        return program;
      }
    }
    return false;
  });
};


// todo -  select by filter
