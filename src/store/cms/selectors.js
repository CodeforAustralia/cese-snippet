export const selectCms = (state = {}) => {
  return state.cms;
};

export const selectSchoolsList = (state) => {
  return state.cms.schoolsList;
};

export const selectStaffList = (state) => {
  return state.cms.staffList;
};
