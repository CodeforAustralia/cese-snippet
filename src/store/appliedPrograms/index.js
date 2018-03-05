import mockApi from 'mockApi';
import initialState from 'store/initialState';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

const ACTION_TYPES = {
  update: 'APPLIED_PROGRAMS/UPDATE'
};

export const appliedProgramsReducer = (state = initialState.appliedPrograms, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.update:
      return payload.appliedPrograms;
    default:
      return state;
  }
};

export const fetchAppliedPrograms = () => {
  return (dispatch, getState, api) => {
    const req = USE_MOCKS ? mockApi('/appliedPrograms') : api('/appliedPrograms');
    return req.then((appliedPrograms) => {
      return dispatch(updateAppliedPrograms(appliedPrograms));
    });
  };
};

export const updateAppliedPrograms = (appliedPrograms) => {
  return {
    type: ACTION_TYPES.update,
    payload: {
      appliedPrograms: appliedPrograms
    }
  }
};
