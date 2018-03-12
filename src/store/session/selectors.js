import get from 'lodash/get';

export const selectSession = (state) => {
  return get(state, 'session');
};

export const selectUserSchoolCodes = (state) => {
  return selectSession(state).schools;
};
