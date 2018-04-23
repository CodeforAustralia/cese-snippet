import get from 'lodash/get';

export const selectIsFetching = (state) => {
  return get(state, 'staff.isFetching', null);
};

export const selectStaffMember = (state, id) => {
  return get(state, `staff.byId[${id}]`, null);
};

/**
 * @param state {Object}
 * @param {Array} Staff
 */
export const selectStaff = (state) => {
  const staffSet = get(state, 'staff.byId', null);
  return Object.values(staffSet);
};
