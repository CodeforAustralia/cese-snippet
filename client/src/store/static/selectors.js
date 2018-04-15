export const selectStatic = (state = {}) => {
  return state.static;
};

export const selectSchoolsList = (state) => {
  return state.static.schoolsList;
};

export const selectStaffList = (state) => {
  return state.static.staffList;
};
