import get from 'lodash/get';

export const selectIsFetching = (state) => {
  return get(state, 'users.isFetching', null);
};

export const selectIsUpdating = (state) => {
  return get(state, 'users.isUpdating', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'users.errorMessage', null);
};

export const selectUser = (state, id) => {
  return get(state, `users.byId.${id}`, null);
};

export const selectUsers = (state, ids = null) => {
  if (!ids) {
    return Object.values(state.users.byId);
  }
  return ids.map(id => {
    return selectUser(state, id);
  }).filter(users => {
    return users !== null;
  });
};
