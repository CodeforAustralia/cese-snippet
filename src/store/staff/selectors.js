import get from 'lodash/get';

export const selectIsFetching = (state) => {
  return get(state, 'staff.isFetching', null);
};

export const selectErrorMessage = (state) => {
  return get(state, 'staff.errorMessage', null);
};

export const selectStaffMember = (state, id) => {
  return get(state, `staff.byId.${id}`, null);
};

export const selectStaff = (state, ids = null) => {
  if (!ids) {
    const staffSet = get(state, 'staff.byId', null);
    return Object.values(staffSet);
  }
  return ids.map(id => {
    return selectStaffMember(state, id);
  }).filter(staff => {
    return staff !== null;
  });
};
