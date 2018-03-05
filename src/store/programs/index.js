import mockApi from 'mockApi';
import initialState from 'store/initialState';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

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
    const req = USE_MOCKS ? mockApi('/programs') : api('/programs');
    return req.then((programs) => {
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
