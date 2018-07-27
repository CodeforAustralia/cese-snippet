export const ACTION_TYPES = {
  setSession: 'SESSION/SET',
};

const sessionReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.setSession:
      return payload.session;
    default:
      return state;
  }
};

export default sessionReducer;
