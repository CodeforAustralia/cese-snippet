export const ACTION_TYPES = {
  registerMySchool: 'SESSION/REGISTER_SCHOOL',
};

const sessionReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.registerMySchool:
      const code = payload.school.code;
      state.schools = [...state.schools, code];
      return state;
    default:
      return state;
  }
};

export default sessionReducer;
