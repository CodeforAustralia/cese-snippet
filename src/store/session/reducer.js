export const ACTION_TYPES = {
  fetchSuccess: 'SESSION/FETCH_SUCCESS',
};

const sessionReducer = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.fetchSuccess:
      return payload.session;
    default:
      return state;
  }
};

export default sessionReducer;
