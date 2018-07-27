import get from 'lodash/get';

export const selectIsFetching = (state) => {
  return get(state, 'users.isFetching', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'users.errorMessage', null);
};

export const selectUser = (state, id) => {
  return get(state, `users.byId.${id}`, null);
};

export const selectUsers = (state, ids = null) => {
  if (!ids) {
    const staffSet = get(state, 'users.byId', null);
    return Object.values(staffSet);
  }
  return ids.map(id => {
    return selectUser(state, id);
  }).filter(users => {
    return users !== null;
  });
};
