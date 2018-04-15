export const ACTION_TYPES = {
  registerMySchool: 'SESSION/REGISTER_SCHOOL',
};

const sessionReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.registerMySchool:
      const newState = {...state};
      newState.schools.push(payload.code);
      return newState;
    default:
      return state;
  }
};

export default sessionReducer;
