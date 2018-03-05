import initialState from 'store/initialState';

const ACTION_TYPES = {
  update: 'PROGRAMS/UPDATE'
};

export const programsReducer = (state = initialState.programs, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.update:
      return payload.programs;
    default:
      return state;
  }
};

export const fetchPrograms = () => {
  return (dispatch, getState, api) => {
    return api('/programs').then((programs) => {
      return dispatch(updatePrograms(programs));
    });
  }
};

export const updatePrograms = (programs) => {
  return {
    type: ACTION_TYPES.update,
    payload: {
      programs: programs
    }
  }
};
