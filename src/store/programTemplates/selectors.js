import get from 'lodash/get';

export const selectProgramTemplate = (state, id) => {
  return get(state, `programTemplates[${id}]`, null);
};

export const selectIsFetching = (state) => {
  return get(state, 'programTemplates.isFetching', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'programTemplates.errorMessage', null);
};

export const selectProgramTemplates = (state, ids = null) => {
  if (!ids) {
    return Object.values(state.programTemplates.byId);
  }
  throw new Error('not implemented');
};
