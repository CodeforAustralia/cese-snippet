import initialState from 'store/initialState';

export const ACTION_TYPES = {
  fetchedProgramFields: 'STATIC/PROGRAM_FIELDS',
  fetchedStaffList: 'STATIC/STAFF_LIST',
  fetchedSchoolsList: 'STATIC/SCHOOLS_LIST',
};

const appReducer = (state = initialState.static, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchedProgramFields:
    case ACTION_TYPES.fetchedStaffList:
    case ACTION_TYPES.fetchedSchoolsList:
      const newState = {...state};
      for (let key in payload) {
        newState[key] = payload[key];
      }
      return newState;
    default:
      return state;
  }
};

export default appReducer;
