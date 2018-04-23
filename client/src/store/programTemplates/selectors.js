import get from 'lodash/get';

export const selectIsFetching = (state) => {
  return get(state, 'programTemplates.isFetching', null);
};

export const selectProgramTemplate = (state, id) => {
  return get(state, `programTemplates.byId[${id}]`, null);
};

export const selectProgramTemplates = (state) => {
  const programTemplatesSet = get(state, 'programTemplates.byId', null);
  return Object.values(programTemplatesSet)
};
