import get from 'lodash/get';

export const selectCms = (state) => {
  return get(state, 'cms.model', null);
};

export const selectIsFetching = (state) => {
  return get(state, 'cms.isFetching', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'cms.errorMessage', null);
};

export const selectSchoolsList = (state) => {
  const cms = selectCms(state);
  return get(cms, 'schoolsList', null);
};

export const selectStaffList = (state) => {
  const cms = selectCms(state);
  return get(cms, 'staffList', null);
};
