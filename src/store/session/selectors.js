import get from 'lodash/get';

export const selectSession = (state) => {
  return get(state, 'session.model', null);
};

export const selectIsFetching = (state) => {
  return get(state, 'session.isFetching', null);
};
