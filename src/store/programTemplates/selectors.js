export const selectProgramTemplate = (state = {}, id) => {
  return state.programTemplates[id];
};

export const selectProgramTemplates = (state = {}, ids = null) => {
  if (!ids) {
    const programTemplatesSet = state.programTemplates.byId;
    return Object.values(programTemplatesSet);
  }
  throw new Error('not implemented');
};
