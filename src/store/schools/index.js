import initialState from 'store/initialState';

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
    return api('/schools').then((schools) => {
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
