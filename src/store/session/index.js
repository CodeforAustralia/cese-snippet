import initialState from 'store/initialState';

const win = typeof window !== 'undefined' ? window : global;

const ACTION_TYPES = {
  update: 'SESSION/UPDATE'
};

export const sessionReducer = (state = initialState.session, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.update:
      return payload.session;
    default:
      return state;
  }
};

export const fetchSession = () => {
  return (dispatch, getState, api) => {
    if (!win.__INITIAL_STATE__ || !win.__INITIAL_STATE__.session) {
      throw new Error("No Session state available.");
    }
    return dispatch(updateSession(win.__INITIAL_STATE__.session));
  }
};

export const updateSession = (session) => {
  return {
    type: ACTION_TYPES.update,
    payload: {
      session: session
    }
  }
};
