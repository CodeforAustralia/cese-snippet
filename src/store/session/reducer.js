export const ACTION_TYPES = {
  createSession: 'SESSION/SET',
};

const sessionReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.createSession:
      return payload.session;
    default:
      return state;
  }
};

export default sessionReducer;
