/**
 * @param state {Object}
 * @param code {String}
 * @returns {Array.<AppliedProgram>}
 */
// export const selectAppliedPrograms = (state, code) => {
//   // return state.appliedPrograms.forEach(program => {
//   //   .filter(program => {
//   //     return program.schoolCode === code;
//   //   })
//   // })
// };


export const selectAppliedProgramsIds = (state, code) => {
  return state.appliedPrograms.data.filter(program => {
    if (program.code === code) {
      return program.id;
    }
  })
};
