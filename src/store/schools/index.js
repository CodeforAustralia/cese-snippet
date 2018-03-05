import mockApi from 'mockApi';
import initialState from 'store/initialState';

const USE_MOCKS = process.env.REACT_APP_USE_MOCKS || false;

const ACTION_TYPES = {
  update: 'SCHOOLS/UPDATE'
};

export const schoolsReducer = (state = initialState.schools, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION_TYPES.update:
      return payload.schools;
    default:
      return state;
  }
};

export const fetchSchools = () => {
  return (dispatch, getState, api) => {
    const req = USE_MOCKS ? mockApi('/schools') : api('/schools');
    return req.then((schools) => {
      return dispatch(updateSchools(schools));
    });
  }
};

export const updateSchools = (schools) => {
  return {
    type: ACTION_TYPES.update,
    payload: {
      schools: schools
    }
  }
};
